type Props = {
    cards: React.ReactNode[]
    minWidth?: string
    autoFill?: boolean
}

export const ListCards = ({cards, minWidth = "16rem", autoFill}: Props) => {
    return (
        <div className="w-full py-4 grid gap-5"
             style={{gridTemplateColumns: `repeat(${autoFill ? "auto-fill" : "auto-fit"}, minmax(${minWidth}, 1fr))`}}>

            {cards.map((card, index) => (
                <div key={index}>{card}</div>
            ))}
        </div>
    )
}