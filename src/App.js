import React, {Component} from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import Rank from './Component/Rank/Rank';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
    apiKey: 'c8f014310246404da6dd51e7f75dda73'
});
   
const particleParams = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 300
            }
        }
    }
}


// "https://samples.clarifai.com/face-det.jpg"
class App extends Component {
    constructor(){
        super();

        this.state = {
            input: '',
            imageURL: ''
        }

        this.onInputChange.bind(this);
        this.onButtonSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value})
        console.log(event.target.value);
    }

    onButtonSubmit = () => {
        this.setState({imageURL: this.state.input})
        console.log("click");
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
            function(response) {
                console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
            },
            function(err) {
            // there was an error
            }
  );
    }

    
    render() {
        return (
            <div className="App">
                <Particles params={particleParams} className="particles"/>
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} /> 
                <FaceRecognition imageURL={this.state.imageURL}/>
            </div>
        );
    }
}

export default App;
