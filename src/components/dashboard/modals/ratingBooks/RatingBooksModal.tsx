import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar, faComment, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { ButtonGradient } from "../../../shared/buttons/ButtonGradient.tsx";
import { ModalBase } from "../../../shared/BaseModal.tsx";
import { useState } from "react";
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

type Props = {
    trigger?: React.ReactNode;
    bookId: number;
}

export const RatingBooksModal = ({ trigger, bookId }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { addRating } = useRequests();

    const { register, handleSubmit, control, watch, formState: { errors, isSubmitting } } = useForm<AddRatingFormData>({
        resolver: yupResolver(ratingSchema),
        defaultValues: {
            rating: 5,
            comment: ""
        }
    });

    const commentValue = watch("comment");

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
            setOpen={setIsOpen}
            onOpenChange={setIsOpen}
            title="Avaliar livro"
            description="Escolha de 1 a 5 estrelas e, se quiser, deixe um comentário."
            icon={<FontAwesomeIcon icon={faStar} className="text-yellow-600" />}
            bgIconColor="bg-amber-100"
            trigger={trigger ? trigger : <ButtonGradient><FontAwesomeIcon icon={faPlus} />Avaliar livro</ButtonGradient>}
            modalFooter={(
                <ButtonGradient
                    form={"rating-form-modal"}
                    type={"submit"}
                    className="w-full"
                    disabled={isSubmitting}
                >
                    Enviar avaliação
                    <FontAwesomeIcon icon={faPaperPlane} />
                </ButtonGradient>
            )}
        >
            <form
                id="rating-form-modal"
                className="flex flex-col gap-3 flex-1 relative"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-1 mb-2">
                    <Label text="Sua avaliação" />
                    <Controller
                        name="rating"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <StarRatingInput
                                value={value}
                                onChange={onChange}
                                sizeClassName="text-4xl"
                            />
                        )}
                    />
                    {errors.rating && <ErrorMessage message={errors.rating.message} />}
                </div>

                <TextArea
                    label="Comentário"
                    faIcon={faComment}
                    placeholder="O que você achou deste livro?"
                    helpText={errors.comment ? errors.comment.message : "O comentário não pode ultrapassar 200 caracteres"}
                    maxLength={200}
                    value={commentValue}
                    {...register("comment")}
                />
            </form>

        </ModalBase>
    )

}