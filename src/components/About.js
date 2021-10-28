import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function About() {
    return (
        <Container maxWidth="lg" sx={{bgcolor: '#666'}}>
            <Typography variant="h4" component="h1" gutterBottom>
                ABOUT
            </Typography>
        </Container>
    );
}
