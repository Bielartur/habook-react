
type Props = {
    title: string
    subtitle: string
}

export const TitleConfig = ({ title, subtitle }: Props ) => {
    return (
        <div className="flex flex-col grow w-full">
            <div className="w-full mb-4">
                <div className="w-fit">
                    <h2 className="text-3xl font-semibold text-gradient leading-10">
                        { title }
                    </h2>
                </div>

                <p className="text-slate-600">{ subtitle }</p>
            </div>
        </div>
    )
}