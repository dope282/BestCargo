import React, { Component } from 'react';
import './App.css';
import TrackCodeSection from './components/trackCodeField';
import Header from './components/header';
import SideBar from './components/header/toolbar/sideBarMenu';
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
        <TrackCodeSection/>
      </main>
    </div>
    )
  };
}

export default App;
