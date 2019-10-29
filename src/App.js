import React from 'react';

import './App.css';
import {Component} from 'react';


let defaultStyle = {
  color: "#FFF"

}
let fakeServerData = 
{ 
  
    user : 
    { name : 'Andrew',
    playlists : [{
      name: 'My Favourites',
      songs: [
        {name:'Build me up Buttercup',duration:1200},
        {name:'Ave Verum Corpus',duration:388}, 
        {name:'Britten Choral Dances of Gloriana',duration:560},
        {name:'Rejoice in the Lamb',duration:786}]
    },
     { 
       name : 'Good for Annabelle',
       songs:[
         {name:'Old Macdonald had a farm',duration:242}
        ]
      },
    {
      name: 'Party Playlist',
      songs: [
        {name:'We are sailing',duration:123},
        {name:'Get down',duration:456}]
    }]}
    };

class PlayListCounter extends Component{
  
  render(){
    return (<div style={{ width:"40%", display:"inline-block"}}>
      <h2 style={defaultStyle}>{this.props.playlists && this.props.playlists.length} playlists</h2>
      </div>)
      
    
  }
}

class HoursCounter extends Component{
  
  
  render(){
    let totalDuration = 500;
    let allSongs = this.props.playlists.reduce((songs,eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs);
    },[]);

    totalDuration = allSongs.reduce((sum, eachSong)=>{
      return sum + eachSong.duration
    },0)
    
    return (<div style={{ width:"40%", display:"inline-block"}}>
      <h2 style={defaultStyle}>{Math.round(totalDuration/60)} hours</h2>
      </div>)
      
    
  }
}

class Filter extends Component{
render(){
  return (<div><img/><input type="text"  onKeyUp={event => this.props.onTextChange(event.target.value)}></input></div>)
    
  
}
}

class Playlist extends Component{
  render (){
    let playlist = this.props.playlist;
    return (
    <div style={{...defaultStyle, width: "25%", display:"inline-block"}}>
      <img alt =" "/>
      <h3>{playlist.name}</h3>
      <ul>
        {
          playlist.songs.map((song) =>{
            return <li>{song.name}</li>
          })
        }
      
      </ul>
    </div>)
  }
}

class App extends Component {
  
  
  constructor(){
    super();
    this.state = { 
      serverData : {} ,
      filterString : ''
    };
  }

  componentDidMount(){
    
    setTimeout(()=>{
      this.setState({ serverData : fakeServerData});

    },1000);

    
      
    
      
    

    
   
  }
  
  render(){
    let playlistToRender = this.state.serverData.user? this.state.serverData.user.playlists.filter(
      playlist=>
      playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase())): [];

    return (
    
      <div className="App">
      
        {this.state.serverData.user?
        <div><h1 style={{...defaultStyle,'font-size':'54px','background-color':'black'}}>{this.state.serverData.user.name}'s Playlists</h1>
          <PlayListCounter playlists = {playlistToRender}/>
          <HoursCounter playlists = {playlistToRender}/>
          <Filter onTextChange={text => {this.setState({filterString : text})}} />
          {
            
              playlistToRender.map(
                    playlist=> <Playlist playlist = {playlist} />)
          }
         
          
          </div>: <h1 style={{...defaultStyle,'background-color':'black'}}>Loading...</h1>}
        
        
      </div>
    );

  }
  
  
}

export default App;
