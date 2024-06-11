import './App.css';
import React, { Component } from 'react';
import AsideMenu from './components/asideMenu';
import TaksList from './components/tasksList';
import withStyles from '@material-ui/styles/withStyles';


const styles = (theme)=> ({
  container: {
    display: 'flex',
    height: '100%',
  },
  main: {
    width: '100%',
  }

  
})

class App extends React.Component {
  render() {
   const {classes} = this.props 
   console.log(this.state)
  return (
    <div className={classes.container}>
     <AsideMenu/>
     <main className={classes.main}>
      <TaksList />
     </main>
    </div>
  );
 }
}
export default withStyles(styles)(App);

