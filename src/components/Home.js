import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as React from "react";


export default function Home() {

    return (
        <Container maxWidth="lg" sx={{bgcolor: '#666'}}>
            <Typography variant="h4" component="h1" gutterBottom>
                Create React App v5 example
            </Typography>
        </Container>
    )

}

