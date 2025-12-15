import {AuthTitle} from "./AuthTitle.tsx";

type Props = {
    title?: string
    subtitle?: string
    footerCopy?: string
    children: React.ReactNode;
}

export const ChildrenContainer = ({title, subtitle, footerCopy, children}: Props) => {
    return (
        <div className="w-full md:w-1/2 py-4 md:p-4 px-6 flex flex-col h-full justify-evenly md:justify-between">
            <AuthTitle title={title} subtitle={subtitle} />
            <div className="mt-4 md:mt-auto">
                {children}
            </div>
            <div className="w-full min-h-1/8 flex items-center md:mt-auto mb-4.5">
                <p>
                    {footerCopy}
                </p>
            </div>
        </div>
    )
}