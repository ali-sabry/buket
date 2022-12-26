import { Button } from "@mui/material";


const ArrowBtn = ({ color, type, children }) => {
    return (
        <Button
            sx={{
                display: { md: "block" },
                width: { xs: "fit-content", md: "50%" },
                padding: { md: "13px 0" },
                textAlign: { md: "center" },
                color: color,
            }}
            style={{ marginLeft: type === 'left' && 0, marginRight: type === 'right' && 0 }}
            type="submit"
            variant="contained"
        >
            {children}
        </Button >
    )
};

export default ArrowBtn;