import {AuthTitle} from "./AuthTitle.tsx";
import {Footer} from "../../layout/Footer.tsx";

type Props = {
    title?: string
    subtitle?: string
    footerCopy?: string
    children: React.ReactNode;
}

export const ChildrenContainer = ({title, subtitle, footerCopy, children}: Props) => {
    return (
        <div className="w-full lg:w-1/2 py-4 lg:p-4 px-6 flex flex-col h-full justify-around overflow-y-auto">
            <AuthTitle title={title} subtitle={subtitle} />
            <div className="mt-4">
                {children}
            </div>
            <div className="w-full min-h-1/8 flex items-center mb-4.5">
                <p>
                    {footerCopy}
                </p>
            </div>
            <Footer className="relative w-full px-0 lg:hidden" />
        </div>
    )
}