import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router";

type Props = {
    title?: string
    subtitle?: string
}

export const AuthTitle = ({ title = "Habook", subtitle = "sua jornada de leitura, acompanhada de perto." }: Props) => {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="w-full flex justify-between">
                <h1 className="text-4xl font-semibold text-gradient">
                    {title}
                </h1>
                <NavLink
                    to="/conta/login"
                    className={({ isActive }) =>
                        `button-auth w-fit gap-2 py-2 ${isActive ? "hidden" : ""}`
                    }
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Voltar</span>
                </NavLink>
            </div>
            <p>{subtitle}</p>
        </div>
    )
}