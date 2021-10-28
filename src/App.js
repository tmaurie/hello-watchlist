import * as React from 'react';
import Box from '@mui/material/Box';
import AppNavDrawer from "./components/AppNavDrawer";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
    return (
        <Box>
            <AppNavDrawer/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
            </Switch>
        </Box>
    );
}
