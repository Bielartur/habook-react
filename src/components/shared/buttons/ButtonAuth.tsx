import {SmallLoading} from "../loadings/SmallLoading.tsx";
import {Activity} from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
    disabled?: boolean;
};

export const ButtonAuth = ({children, disabled, ...props}: Props) => {
    return (
        <button className="button-auth" disabled={disabled} {...props}>
            <Activity mode={disabled ? "visible" : "hidden"}>
                <SmallLoading/>
            </Activity>
            <Activity mode={disabled ? "hidden" : "visible"}>
                {children}
            </Activity>
        </button>
    );
};
