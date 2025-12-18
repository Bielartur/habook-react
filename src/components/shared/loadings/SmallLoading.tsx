import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Props = {
    hasLabel?: boolean;
}

export const SmallLoading = ({hasLabel = true}: Props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem", gap: "0.5rem" }}>
            <CircularProgress color="inherit" size={20} className="text-slate-600" />
            {hasLabel && <span>Carregando...</span>}
        </Box>
    )
}