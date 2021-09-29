import { Paper, Typography, Box } from "@material-ui/core"
export default function Hero() {
    return (
        <Paper>
            <Box p={5} display="flex" justifyContent="center">
                <Typography>Hi, I'm Diego Saldonid, Software Engineer!</Typography>
            </Box>
        </Paper>
    )
}