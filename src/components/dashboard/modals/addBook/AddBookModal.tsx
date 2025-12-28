import { ModalBase } from "../../../shared/BaseModal.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { ButtonGradient } from "../../../shared/buttons/ButtonGradient.tsx";
import { useState } from "react";
import { BookSearchSection } from "./BooksSearchSection.tsx";
import { ButtonSubtle } from "../../../shared/buttons/ButtonSubtle.tsx";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
    trigger?: React.ReactNode;
}

export const AddBookModal = ({ trigger }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <ModalBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title="Adicionar Livro"
            description="Comece uma nova jornada de leitura"
            icon={<FontAwesomeIcon icon={faPlus} className="text-blue-600" />}
            bgIconColor="bg-blue-100"
            trigger={trigger ? trigger : <ButtonGradient><FontAwesomeIcon icon={faPlus} />Novo Livro</ButtonGradient>}
            modalFooter={(
                <div className="w-full flex gap-2">
                    <Dialog.Close asChild>
                        <ButtonSubtle className="w-1/2">
                            Cancelar
                        </ButtonSubtle>
                    </Dialog.Close>
                    <ButtonGradient disabled={isSubmitting} type={"submit"} form="add-book-form" className="w-1/2 gap-2">
                        Enviar
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </ButtonGradient>
                </div>
            )}
        >
            <div className="flex-1 relative">
                <BookSearchSection setIsSubmitting={setIsSubmitting} setIsOpen={setIsOpen} />
            </div>

        </ModalBase>
    )
}