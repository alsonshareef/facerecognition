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
      imageURL: '',
      box: {}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  calculateFaceBox = (data) => {
    const faceBoxData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = image.width
    const height = image.height

    return {
      leftCol: faceBoxData.left_col * width,
      topRow: faceBoxData.top_row * height,
      rightCol: width - (faceBoxData.right_col * width),
      bottomRow: height - (faceBoxData.bottom_row * height)
    }
  }

  setFaceBox = box => {
    this.setState({
      box: box
    })
  }

  onButtonSubmit = () => {
      this.setState({imageURL: this.state.input})
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.setFaceBox(this.calculateFaceBox(response)))
      .catch(err => console.log(err))
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
        <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
