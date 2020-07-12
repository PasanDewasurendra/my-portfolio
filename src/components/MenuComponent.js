import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, colors, Hidden } from '@material-ui/core';
import {Home, AssignmentInd, Apps, FeedbackSharp, Info } from '@material-ui/icons';
import profileImg from '../images/pkd.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 'inherit',
        backgroundColor: colors.grey[100]
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: 350,
          flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(22),
        height: theme.spacing(22),
        marginTop: theme.spacing(5),
        border: '1px solid #42a5f2'
    },
    listItem: {
        marginTop: theme.spacing(2),
        paddingLeft: '25%',
        '&:hover': {
            backgroundColor: colors.blue[400],
            color: colors.common.white
        }
     },
     listItemText:{
        fontSize:'1.5em'  
    }

}))

const menuItems = [
    {
        listIcon: <Home fontSize='large' />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <Info fontSize='large' />,
        listText: 'About',
        listPath: '/about'
    },
    {
        listIcon: <AssignmentInd fontSize='large' />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps fontSize='large' />,
        listText: 'Project',
        listPath: '/project'
    },
    {
        listIcon: <FeedbackSharp fontSize='large' />,
        listText: 'Contact',
        listPath: '/contact'
    }   
]

const MenuBar = (props) => {
    const classes = useStyles();

    const {mobileOpen, setMobileOpen} = props;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    console.log('menu toggler: '+ mobileOpen)

    return (
        <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
                <Drawer container={container} style={{width: '350px'}} variant='temporary' anchor='left' open={mobileOpen} onClose={handleDrawerToggle} classes={{paper: classes.drawerPaper}} ModalProps={{keepMounted:true}} >
                    <Avatar className={classes.avatar} src={profileImg} alt='Pasan Dewasurendra' />
                    <Divider style={{marginBottom: 20, marginTop: '3em'}} />   
                    <List>
                        {menuItems.map((item, key) => (
                            <ListItem className={classes.listItem} button key={key} component={Link} to={item.listPath}>
                                <ListItemIcon> {item.listIcon} </ListItemIcon>
                                <ListItemText classes={{primary:classes.listItemText}} primary={item.listText} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>
            
            <Hidden xsDown implementation="css">
                <Drawer  style={{width: '350px'}} classes={{paper: classes.drawerPaper}} variant='permanent' open >
                    <Avatar className={classes.avatar} src={profileImg} alt='Pasan Dewasurendra' />
                    <Divider style={{marginBottom: 20, marginTop: '3em'}} />   
                    <List>
                        {menuItems.map((item, key) => (
                            <ListItem className={classes.listItem} button key={key} component={Link} to={item.listPath}>
                                <ListItemIcon> {item.listIcon} </ListItemIcon>
                                <ListItemText classes={{primary:classes.listItemText}} primary={item.listText} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden> 
        </nav>
    )
}

MenuBar.prototype = {
    window: PropTypes.func
}

export default MenuBar;
