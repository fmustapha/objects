import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar =() => {
    return (
        <AppBar postiion="sticky" color="secondary">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Cities of the World!
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;
