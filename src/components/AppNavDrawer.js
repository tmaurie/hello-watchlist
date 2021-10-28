import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    Toolbar,
    List,
    ListItemButton,
    Collapse,
    ListItemIcon, ListItemText
} from "@mui/material";
import {Menu, ChevronLeft, ExpandLess, ExpandMore, Inbox} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Key from './Key'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function AppNavDrawer() {

    const USER_SERVICE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + Key;

    const [open, setOpen] = useState(false);
    const [openGenre, setOpenGenre] = React.useState(false);
    const [data, setData] = useState({genres: [], isFetching: false});

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setOpenGenre(!openGenre);
    };

    useEffect(() => {
        fetchGenres();
    });

    const fetchGenres = () => {
        axios.get(`${USER_SERVICE_URL}`).then(r => {
            setData(r.data);
        }).catch(error => console.error(`Error : ${error}`));
    };


    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleDrawerOpen}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Hello
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft/>
                    </IconButton>
                </DrawerHeader>
                <List>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <Inbox/>
                        </ListItemIcon>
                        <ListItemText primary="Genres"/>
                        {openGenre ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={openGenre} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {data.genres.map(item => (
                                    <ListItemButton component={Link} to={'/about'} sx={{pl: 4}} key={item.id}>
                                        {item.name}
                                    </ListItemButton>


                            ))}
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </Box>
    );
}
