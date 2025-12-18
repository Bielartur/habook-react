import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Props = {
    className?: string;
}

export const BigLoading = ( {className}: Props ) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem", gap: "0.5rem" }} className={className ?? ""}>
            <CircularProgress color="inherit" size={160} className="text-slate-600"/>
        </Box>
    )
}