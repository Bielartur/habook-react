import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Props = {
    hasLabel?: boolean;
    size?: number | "xs" | "sm" | "md" | "lg" | "xl";
}

export const SmallLoading = ({ size = 18, hasLabel = true}: Props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem", gap: "0.5rem" }}>
            <CircularProgress color="inherit" size={size} className="text-slate-600" />
            {hasLabel && <span>Carregando...</span>}
        </Box>
    )
}