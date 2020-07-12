import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Typed from 'react-typed';
import '../App.css';
import Particales from 'react-particles-js';
import cover from '../images/homeBackground.jpg'


const useStyles = makeStyles(theme => ({
    typedContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1
    }

}))


const Home = () => {
    const classes = useStyles();
    return (
        <div>

            <Box className={classes.typedContainer}>
                <Typography variant='h4' >
                    <Typed  strings={['Hi, I am Pasan Dewasurendra']} typeSpeed={40} />
                </Typography>
                <br />
                <Typography variant='h5' >
                    <Typed startDelay={2000} strings={[' I am a full stack web developer.','I can provide clean code and  creative ideas.','I also make website more interactive with web animations.']}
                    typeSpeed={40} loop />
                </Typography>  
            </Box>

            <Particales style={{position:'fixed', background:'url('+cover+') no-repeat center fixed' }}
                params={{
                particles: {
                    number:{
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                    },
                    shape: {
                    type: "circle",
                    stroke:
                    {
                        width: 1,
                        color: '#fff'
                    }
                    },
                    size:{
                    value: 8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 6,
                        size_min: 0.1,
                        sync: true
                    }
                    }
                }
                }} 
            />
        </div>
    )
}

export default Home;