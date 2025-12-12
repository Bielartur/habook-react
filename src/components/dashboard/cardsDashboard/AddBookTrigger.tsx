import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AddBookModal} from "../modals/addBook/AddBookModal.tsx";

export const AddBookTrigger = () => {

    return (
        <div className="w-full text-purple-600 hover:text-purple-700 text-sm">
            <AddBookModal trigger={(
                <button
                    type="button"
                    className="cursor-pointer space-x-0.5"
                >
                    <FontAwesomeIcon icon={faPlus}/>
                    <span className="font-medium">Adicionar livro</span>
                </button>
            )} />
        </div>
    )
}