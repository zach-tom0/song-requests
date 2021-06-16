import React from 'react';
import logo from './logo.svg';
import FadeIn from 'react-fade-in'
import Button from './component/button.js';
import Input from './component/input.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false,
      password: null,
      isPasswordCorrect: false,
      name: null,
      song: null,
      artist: null
    }

    this.handleSongRequest = this.handleSongRequest.bind(this)
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event){
    const stateName= event.target.name
    this.setState({[stateName]:event.target.value});
  }

  handleSongRequest(event){
    alert(this.state.name + ' wants you to play ' + this.state.song + ' by ' + this.state.artist)

    // fetch("https://lkfrz7umw5.execute-api.us-east-1.amazonaws.com/dev",
    // {
    //   "method": "POST",
    //   "headers": {
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   },
    //   "body": JSON.stringify({
    //     name: this.state.name,
    //     song: this.state.song,
    //     artist: this.state.artist
    //   })
    // })
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    return;
  }

  handlePasswordSubmit(event){
  //   fetch("url",
  // {
  //   "method": "POST",
  //   "headers": {
  //     "content-type": "application/json",
  //     "accept": "application/json"
  //   },
  //   "body": JSON.stringify({
  //     this.state.password
  //   })
  // })
  // .then(response => {
  //   console.log(response)
  // })
  // .catch(err => {
  //   console.log(err);
  // });})
    alert(this.state.password)
    if(this.state.password === 'password'){
      this.setState({isPasswordCorrect: true})
    }
    else{
      this.setState({password: ''},)
    }
  }
  passwordPage(){
    return(
      <div className="password">
      <header className="App-header">
        <span><Input name="password" placeholder="Enter code" value={this.state.password} onChange={this.handleChange}/></span>
        <span><Button value="Enter" onClick={this.handlePasswordSubmit} /></span>
      </header>
    </div>)
  }
  songRequestPage(){
    return(
      <div className="songRequests">
        <header className="App-header">
          <div className="App-Form">
            <Input name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange}/>
            <Input name="song" placeholder="Song Name" value={this.state.song} onChange={this.handleChange}/>
            <Input name="artist" placeholder="Artist Name" value={this.state.artist} onChange={this.handleSongRequest}/>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
            <Button value="Request a song" onClick={this.handleSubmit}/>
        </header>
      </div>
    )
  }

  render() {
    while(!this.state.isPasswordCorrect){
      return(
        <FadeIn>
          {this.passwordPage()}
        </FadeIn>)
    }
      return(this.songRequestPage())
  }
}

export default App;
