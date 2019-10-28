import React from 'react';

import './App.css';
import {Component} from 'react';

let defaultStyle = {
  color: "#FFF"

}

class Aggregate extends Component{
  render(){
    return (<div style={{ width:"40%", display:"inline-block"}}>
      <h2 style={defaultStyle}>Number Text</h2>
      </div>)
      
    
  }
}

class Filter extends Component{
render(){
  return (<div><img/><input type="text"></input></div>)
    
  
}
}

class Playlist extends Component{
  render (){
    return (
    <div style={{...defaultStyle, width: "25%", display:"inline-block"}}>
      <img/>
      <h3>Play List</h3>
      <ul>
      <li>Song 1</li>
      <li>Song 2</li>
      <li>Song 3</li>
      
      </ul>
    </div>)
  }
}

function App() {
  
 
  
  return (
    
    <div className="App">
    
      <h1 style={{...defaultStyle,'font-size':'54px'}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      
      
    </div>
  );
}

export default App;
