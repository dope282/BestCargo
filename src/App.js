import React, { Component } from 'react';
import './App.css';
import TrackCodeSection from './components/trackCodeField';
import Header from './components/header';
import SideBar from './components/header/toolbar/sideBarMenu';
import Login from './components/LoginSignupPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
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
      <BrowserRouter>
        <div>
          <Header toggleSideBar={this.toggleSideBar}/>
          <SideBar  
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}/>
        <main className='Content'>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Track" element={<TrackCodeSection/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    )
  };
}

export default App;
