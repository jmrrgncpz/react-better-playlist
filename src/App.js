import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let fakeServerData = {
  user : {
    name : 'Jes',
    playlists : [
      {
        name : 'A+ Playlist',
        songs : [
          {
            name : 'Aleluia',
            duration : 1432232
          },
          {
            name : 'Mundo',
            duration : 412312321
          },
          {
            name : 'Munggo',
            duration : 12342312
          },
        ]
      },
      {
        name : 'Most Amazings',
        songs : [
          {
            name : 'Aleluia',
            duration : 231212323
          },
          {
            name : 'Mundo',
            duration : 12432345
          },
          {
            name : 'Munggo',
            duration : 1222546568
          },
        ]
      },
      {
        name : 'More amazing than the most amazing',
        songs : [
          {
            name : 'Aleluia',
            duration : 42326745
          },
          {
            name : 'Mundo',
            duration : 1444532
          },
          {
            name : 'Munggo',
            duration : 2415125
          },
        ]
      },
      {
        name : 'Better Yet, Hay',
        songs : [
          {
            name : 'Aleluia',
            duration : 5234554
          },
          {
            name : 'Mundo',
            duration : 122345
          },
          {
            name : 'Munggo',
            duration : 222345345
          },
        ]
      },
    ]
  }
}

class PlaylistCounter extends Component {
  render () {
    return (
      <div style={{
        width : '40%',
        display : 'inline-block'
      }}>
        <h2 style={{color : 'gray'}}>{this.props.playlists && this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render () {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => songs.concat(eachPlaylist.songs), []);
    let totalDurationSeconds = allSongs.reduce((total, song) => song.duration + total, 0);
    return (
      <div style={{
        width : '40%',
        display : 'inline-block'
      }}>
        <h2 style={{color : 'gray'}}>{Math.round(totalDurationSeconds / 3600)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render () {
    return (
      <div>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render () {
    return (
      <div style={{
        width : "25%",
        display : 'inline-block'
      }}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {serverData : {}};
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({serverData :fakeServerData});
    }, 1000);
  }

  render() {  
    return (
        <div className="App">
          {this.state.serverData.user ?
            <div>
              {<h1>{this.state.serverData.user.name}'s Playlists</h1>}
              
                  <PlaylistCounter playlists={this.state.serverData.user.playlists}/>

                  <HoursCounter playlists = {this.state.serverData.user.playlists}/>
                
              <Filter/>
              <Playlist/>
              <Playlist/>
              <Playlist/>
              <Playlist/>
            </div> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
