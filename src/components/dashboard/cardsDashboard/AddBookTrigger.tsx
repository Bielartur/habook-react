import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddBookTrigger = () => {

    const openModalAddLivro = () => {
        return;
    }

    return (
        <div className="w-full text-purple-600 hover:text-purple-700 text-sm">
            <button 
                type="button" 
                className="cursor-pointer space-x-0.5"
                onClick={openModalAddLivro}
            >
                <FontAwesomeIcon icon={faPlus}/>
                <span className="font-medium">Adicionar livro</span>
            </button>
        </div>
    )
}