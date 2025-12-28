import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar, faComment, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { ButtonGradient } from "../../../shared/buttons/ButtonGradient.tsx";
import { ButtonSubtle } from "../../../shared/buttons/ButtonSubtle.tsx";
import { ModalBase } from "../../../shared/BaseModal.tsx";
import { useEffect, useRef } from "react";
import { TextArea } from "../../../shared/inputs/TextArea.tsx";
import { StarRatingInput } from "../../../shared/stars/StarRatingInput.tsx";
import { Label } from "../../../shared/inputs/Label.tsx";
import { useRequests } from "../../../../hooks/useRequests.ts";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ratingSchema } from "../../../../models/schemas/AdddRatingSchemas.ts";
import type { AddRatingFormData } from "../../../../models/Rating";
import toast from "react-hot-toast";
import { ErrorMessage } from "../../../shared/ErrorMessage.tsx";
import * as Dialog from "@radix-ui/react-dialog";
import { useAuth } from "../../../../hooks/useAuth.tsx";

type Props = {
    trigger?: React.ReactNode;
    bookId: number;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const RatingBooksModal = ({ isOpen, setIsOpen, trigger, bookId }: Props) => {
    const { addRating } = useRequests();
    const { setRefresh } = useAuth();

    const { register, handleSubmit, control, watch, formState: { errors, isSubmitting } } = useForm<AddRatingFormData>({
        resolver: yupResolver(ratingSchema),
        defaultValues: {
            nota: 5,
            comentario: ""
        }
    });

    const wasOpen = useRef(isOpen);

    useEffect(() => {
        if (!isOpen && wasOpen.current) {
            console.log("refreshing")
            setRefresh((prev) => !prev)
        }
        wasOpen.current = isOpen;
    }, [isOpen]);

    const commentValue = watch("comentario");

    const onSubmit = async (data: AddRatingFormData) => {

        const response = await addRating(bookId, data);
        if (response.success) {
            setIsOpen(false);
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };

    return (
        <ModalBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title="Avaliar livro"
            description="Escolha de 1 a 5 estrelas e, se quiser, deixe um comentário."
            icon={
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            }
            bgIconColor="bg-yellow-100"
            closeOnOutsideClick={false}
            trigger={trigger !== undefined ? trigger : (
                <button className="flex items-center justify-center p-2 bg-yellow-100 rounded-md cursor-pointer">
                    <FontAwesomeIcon icon={faStarSolid} className="text-yellow-400 text-lg" />
                </button>
            )}
            modalFooter={(
                <div className="w-full flex gap-2">
                    <Dialog.Close asChild>
                        <ButtonSubtle className="w-1/2">
                            Avaliar depois...
                        </ButtonSubtle>
                    </Dialog.Close>
                    <ButtonGradient form="rating-form-modal" type="submit" disabled={isSubmitting} className="w-1/2 gap-2">
                        Enviar avaliação
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </ButtonGradient>
                </div>
            )}
        >
            <form
                id="rating-form-modal"
                className="flex flex-col gap-3 flex-1 relative"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-1 mb-2">
                    <Label text="Sua avaliação" required />
                    <Controller
                        name="nota"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <StarRatingInput
                                value={value}
                                onChange={onChange}
                                sizeClassName="text-4xl"
                            />
                        )}
                    />
                    {errors.nota && <ErrorMessage message={errors.nota.message} />}
                </div>

                <TextArea
                    label="Comentário"
                    faIcon={faComment}
                    optional
                    placeholder="O que você achou deste livro?"
                    helpText={errors.comentario ? errors.comentario.message : "O comentário não pode ultrapassar 200 caracteres"}
                    maxLength={200}
                    value={commentValue}
                    {...register("comentario")}
                />
            </form>

        </ModalBase>
    )

}