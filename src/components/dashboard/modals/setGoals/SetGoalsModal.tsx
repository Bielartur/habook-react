import {ModalBase} from "../../../shared/BaseModal.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSquarePollVertical} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {ButtonGradient} from "../../../shared/buttons/ButtonGradient.tsx";
import {useState} from "react";
import {SelectRow} from "../../../shared/inputs/SelectRow.tsx";

type Props = {
    trigger?: React.ReactNode;
}

export const SetGoalsModal = ({ trigger }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalBase
            open={isOpen}
            setOpen={setIsOpen}
            onOpenChange={setIsOpen}
            title="Definir metas"
            description="Uma boa meta é o primeiro passo para a constância.

"
            icon={<FontAwesomeIcon icon={faSquarePollVertical} className="text-slate-600"/>}
            bgIconColor="bg-slate-200"
            trigger={trigger ? trigger : <ButtonGradient><FontAwesomeIcon icon={faPlus}/>Novo Livro</ButtonGradient>}
            modalFooter={(
                    <ButtonGradient className="w-full flex gap-2">
                        Enviar
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </ButtonGradient>
            )}
        >
            <div className="flex-1 relative">
                <SelectRow />
            </div>

        </ModalBase>
    )
}