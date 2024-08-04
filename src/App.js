import React, { Component } from 'react';
import './App.css';
import TrackCodeSection from './components/trackCodeField';
import Header from './components/header';
import SideBar from './components/header/toolbar/sideBarMenu';
import Login from './components/LoginSignupPage';
import HomePage from './components/HomePage';
class App extends Component {
  state = {
    showSideBar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar: !prevState.showSideBar}
    });
  }

  render() {
    return (
      <div>
      <Header toggleSideBar={this.toggleSideBar}/>
      <SideBar  
      showSideBar={this.state.showSideBar}
      toggleSideBar={this.toggleSideBar}/>
      <main className='Content'>
        {/* <HomePage/> */}
        {/* <TrackCodeSection/> */}
        <Login/>
      </main>
    </div>
    )
  };
}

export default App;
