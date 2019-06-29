import React from 'react';
import {Component} from 'react'
import SimpleMap from './components/Map';
import ButtonAppBar from './components/NavBar'
import MiniDrawer from './components/SideNav'
class App extends Component{
  render(){
    return(
      <div>
        <MiniDrawer/>
        <SimpleMap/>
      </div>
    )
  }
}

export default App;