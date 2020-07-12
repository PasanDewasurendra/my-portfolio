import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, colors, Hidden } from '@material-ui/core';
import {Home, AssignmentInd, Apps, FeedbackSharp, Info } from '@material-ui/icons';
import profileImg from '../images/pkd.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 'inherit',
        backgroundColor: '#191d2b',
        borderRight:'1px solid #363b4d'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
          width: 300,
          flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: theme.spacing(5),
        border: '2px solid #1084c7'
    },
    listItem: {
        marginTop: theme.spacing(1),
        color:'#a4acc4',
        paddingLeft: '25%',
        '&:hover': {
            backgroundColor: colors.lightBlue[800],
            color: '#a4acc4'
        },
        
     },
     listItemText:{
        fontSize:'1.2em'  
    }

}))

const menuItems = [
    {
        listIcon: <Home fontSize='large' />,
        listText: 'Home',
        listPath: '/',
        title: 'Welcome to My Profile',
        selected: true
    },
    {
        listIcon: <Info fontSize='large' />,
        listText: 'About',
        listPath: '/about',
        title: 'Who is Pasan Dewasurendra',
        selected: false
    },
    {
        listIcon: <AssignmentInd fontSize='large' />,
        listText: 'Resume',
        listPath: '/resume',
        title: 'My Resume',
        selected: false
    },
    {
        listIcon: <Apps fontSize='large' />,
        listText: 'Project',
        listPath: '/project',
        title: 'What are my Projects',
        selected: false
    },
    {
        listIcon: <FeedbackSharp fontSize='large' />,
        listText: 'Contact',
        listPath: '/contact',
        title: 'Contact me on here or lets give a feedback',
        selected: false
    }   
]

const MenuBar = (props) => {
    const classes = useStyles();

    const {mobileOpen, setMobileOpen} = props;
    const {setTitle} = props;
    console.log('setitile : '+setTitle)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const itemSelected = (id) => {
        menuItems[id].selected = true;
        console.log( menuItems.filter(item => menuItems.indexOf(item) !== id))
        menuItems.filter(item => menuItems.indexOf(item) !== id).map(item => item.selected = false)
    }

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer}>
            <Hidden mdUp implementation="css">
                <Drawer container={container} style={{width: '300px'}} variant='temporary' anchor='left' open={mobileOpen} onClose={handleDrawerToggle} classes={{paper: classes.drawerPaper}} ModalProps={{keepMounted:true}} >
                    <Avatar className={classes.avatar} src={profileImg} alt='Pasan Dewasurendra' />
                    <Divider style={{marginBottom: 20, marginTop: '3em',  backgroundColor:'#363b4d'}} />   
                    <List style={{marginLeft:5, marginRight:5}} >
                        {menuItems.map((item, key) => (
                            <ListItem className={classes.listItem} button key={key} component={Link} to={item.listPath} onClick={() => {handleDrawerToggle(); setTitle(item.title)} }>
                                <ListItemIcon style={{color:'#a4acc4'}}> {item.listIcon} </ListItemIcon>
                                <ListItemText classes={{primary:classes.listItemText}} primary={item.listText} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>

            <Hidden smDown implementation="css">
                <Drawer  style={{width: '300px'}} classes={{paper: classes.drawerPaper}} variant='permanent' open >
                    <Avatar className={classes.avatar} src={profileImg} alt='Pasan Dewasurendra' />
                    <Divider style={{marginBottom: 20, marginTop: '3em', backgroundColor:'#363b4d'}} />   
                    <List style={{marginLeft:5, marginRight:5}}>
                        {menuItems.map((item, key) => (
                            <ListItem className={classes.listItem} button key={key} component={Link} to={item.listPath} selected={item.selected} onClick={() => {setTitle(item.title); itemSelected(key) }}>
                                <ListItemIcon style={{color:'#a4acc4'}}> {item.listIcon} </ListItemIcon>
                                <ListItemText classes={{primary:classes.listItemText}} primary={item.listText} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden> 
        </nav>
    )
}

export default MenuBar;
