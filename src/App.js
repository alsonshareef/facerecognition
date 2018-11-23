import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: '44c931939339479caa1d7f050f9bbaae'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
      this.setState({imageURL: this.state.input})
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles'/>
        <Navigation />
        <Logo />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
