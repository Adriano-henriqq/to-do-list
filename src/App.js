import './App.css';
import React, { Component } from 'react';
import AsideMenu from './components/asideMenu';
import TaksList from './components/tasksList';
import withStyles from '@material-ui/styles/withStyles';
import NavBar from './components/NavBar';


const styles = {
  container: {
    display: 'flex',
    height: '100%',
  },
  main: {
    width: '100%',
    
  },
 nav:{
   padding: '0 0 10px 0'
 }
  
}

class App extends Component {
  render() {
  return (
    <div>
    <div style={styles.container}>
     <AsideMenu/>
     <main style={styles.main}>
     <nav style={styles.nav}> 
      <NavBar/>
      </nav> 
      <TaksList />
     </main>
    </div>
    </div> 
  );
 }
}
export default withStyles(styles)(App);

