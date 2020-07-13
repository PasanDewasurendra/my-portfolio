import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, colors } from '@material-ui/core';
import Typed from 'react-typed';
import '../App.css';
import Particales from 'react-particles-js';
import nodeJava from '../images/java.png';
import nodePython from '../images/python.png';
import nodeReact from '../images/react.png';
import nodeNodejs from '../images/nodejs.png';
import nodeAngular from '../images/angular.svg';
import nodeBootstrap from '../images/bootstrap.png';
import nodehtml from '../images/html.png';
import nodecss from '../images/css.png';
import nodeMaterialui from '../images/material-ui.png';



const useStyles = makeStyles(theme => ({
    typedContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1,
        [theme.breakpoints.up('md')]: {
            marginLeft:100
        }
    },
    typedHeader:{
        color: colors.common.white,
        fontWeight:'lighter',
        fontFamily: 'Nunito,sans-serif;'
    },
    typedSubHeader:{
        color: colors.indigo[200],
    },
    particlesContainer:{
        position:'fixed',
        marginTop:-40, 
        marginLeft: -25,
        background: '#191d2d'
    }

}))

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.typedContainer}>
                <Typography variant='h3' >
                    <Typed className={classes.typedHeader} strings={['Hi, I am Pasan Dewasurendra']} typeSpeed={40} />
                </Typography>
                <br />
                <Typography variant='h5' >
                    <Typed className={classes.typedSubHeader} startDelay={2000} strings={[' I am a full stack web developer.','I can provide clean code and  creative ideas.','I also make website more interactive with web animations.']}
                    typeSpeed={40} loop />
                </Typography>  
            </Box>

            <Particales canvasClassName={classes.particlesContainer}
                params={{
                    particles: {
                        number:{
                            value: 50,
                            density: {
                            enable: true,
                            value_area: 900
                            }
                        },
                        color:{
                            value: '#a4acc4'
                        },
                        shape: {
                            type:"image",
                            stroke:
                            {
                                width: 1,
                                color: '#fff'
                            },
                            image:[
                                {
                                    src: nodeJava,
                                    width:100,
                                    height:100
                                },
                                {
                                    src: nodePython,
                                    width:100,
                                    height:100
                                },
                                {
                                    src: nodeReact,
                                    width:100,
                                    height:100
                                },
                                {
                                    src: nodeNodejs,
                                    width:100,
                                    height:100
                                },
                                {
                                    src: nodeAngular,
                                    width:80,
                                    height:80
                                },
                                {
                                    src: nodeNodejs,
                                    width:100,
                                    height:100
                                },
                                {
                                    src: nodeMaterialui,
                                    width:100,
                                    height:100
                                },
                                {
                                    src: nodehtml,
                                    width:100,
                                    height:100
                                },
                                {
                                    src: nodeBootstrap,
                                    width:100,
                                    height:100
                                },
                            ]
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
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode:"destroy",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode:["bubble","grab"]
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 800,
                                line_linked: {
                                    opacity: 0.2
                                }
                            },
                            bubble: {
                                distance: 500,
                                size: 30,
                                duration: 2,
                                opacity: 0.8,
                                speed: 3
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.6
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: true
                }} 
            />
        </div>
    )
}

export default Home;