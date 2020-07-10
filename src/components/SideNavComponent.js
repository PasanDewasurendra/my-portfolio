import React, { useState } from 'react'
import profileImg from '../images/pkd.jpg';
import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, colors, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {Menu, Home, AssignmentInd, Apps, ContactMail, Info } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import MobillRight from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
    sidebarContainer: {
        width: 250,
        background: colors.blueGrey[200],
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    }

}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <Info />,
        listText: 'About',
        listPath: '/about'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Project',
        listPath: '/project'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact',
        listPath: '/contact'
    }   
]

const SideNav = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        right: false
    })
    const menuToggler = (slider, open) => () => {
        setState({
            ...state, [slider]: open 
        })
    }

    const sidebar = slider => (
        <Box component='div' className={classes.sidebarContainer} >
            <Avatar className={classes.avatar} src={profileImg} alt='Pasan Dewasurendra' />
            <Divider />
            <List>
                {menuItems.map((item, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon>{item.listIcon}</ListItemIcon>
                        <ListItemText primary={item.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return(
        <Box component="nav" >
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={menuToggler("right",true)}>
                        <Menu style={{color: 'white' }} />
                    </IconButton>
                    <Typography variant='h5'>Who is Pasan Dewasurendra</Typography>
                </Toolbar>
                < MobillRight open={state.right} onClose={menuToggler("right", false)}>
                    {sidebar('right')}
                </MobillRight>
            </AppBar>
        </Box>
    )
}

export default SideNav;