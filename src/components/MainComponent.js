import React from 'react'
import Home from './HomeComponent';
import Resume from './ResumeComponent';
import Project from './ProjectComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import MenuBar from './MenuComponent';
import { Route } from 'react-router-dom';
import NavBar from './NavBarComponent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop:theme.spacing(10)
  },
}));

const Main = () => {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [title, setTitle] = React.useState('Pasan Dewasurendra');

    console.log('main setTitle: '+title)

    return (
      <div style={{display:'flex'}}>
        <NavBar title={title} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
        <MenuBar setTitle={setTitle} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
        <main className={classes.content}>
          <Route exact path="/"  component={() => <Home />} />
          <Route path="/about"   component={() => <About />} />
          <Route path="/resume"  component={() => <Resume />} />
          <Route path="/project" component={() => <Project />} />
          <Route path="/contact" component={() => <Contact />} />
        </main>
      </div>
    );
  }

  export default Main;