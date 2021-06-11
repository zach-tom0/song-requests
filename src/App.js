import React from 'react';
import logo from './logo.svg';
import Button from './component/button.js';
import Input from './component/input.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      song: null,
      artist: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const stateName= event.target.name
    this.setState({[stateName]:event.target.value});
  }

  handleSubmit(event){
    alert(this.state.name + ' wants you to play ' + this.state.song + ' by ' + this.state.artist)

    fetch("https://lkfrz7umw5.execute-api.us-east-1.amazonaws.com/dev",
    {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        name: this.state.name,
        song: this.state.song,
        artist: this.state.artist
      })
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
    return;
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <div className="App-Form">
          <Input name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange}/>
          <Input name="song" placeholder="Song Name" value={this.state.song} onChange={this.handleChange}/>
          <Input name="artist" placeholder="Artist Name" value={this.state.artist} onChange={this.handleChange}/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={this.handleSubmit}/>
      </header>
    </div>)
  }
}

export default App;
