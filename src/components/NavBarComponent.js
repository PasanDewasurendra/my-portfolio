import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, colors } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - 350px)`,
          marginLeft: 350
        },
        backgroundColor: colors.lightBlue[900]
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft:theme.spacing(1),
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    }

}));


const NavBar = (props) => {
    const classes = useStyles();

    const {mobileOpen, setMobileOpen} = props;
//    console.log('nav toggler: '+ mobileOpen+' , '+setMobileOpen)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return(
            <AppBar position='fixed' className={classes.appBar} >
                <Toolbar>
                    <IconButton color='inherit' edge='start' className={classes.menuButton} onClick={handleDrawerToggle}>
                        <MenuIcon fontSize='large'/>
                    </IconButton>
                    <Typography variant='h5'>{props.title}</Typography>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar;