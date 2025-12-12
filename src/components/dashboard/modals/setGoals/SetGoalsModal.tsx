import {ModalBase} from "../../../shared/BaseModal.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSquarePollVertical} from "@fortawesome/free-solid-svg-icons";
import {ButtonGradient} from "../../../shared/buttons/ButtonGradient.tsx";
import {useState} from "react";
import {SelectRow} from "../../../shared/inputs/SelectRow.tsx";
import {ButtonSave} from "../../../shared/buttons/ButtonSave.tsx";

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
                    <ButtonSave />
            )}
        >
            <div className="flex-1 relative">
                <SelectRow />
            </div>

        </ModalBase>
    )
}