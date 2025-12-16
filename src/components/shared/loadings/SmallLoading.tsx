import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const SmallLoading = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem", gap: "0.5rem" }}>
            <CircularProgress color="inherit" size={20} />
            <span>Carregando...</span>
        </Box>
    )
}