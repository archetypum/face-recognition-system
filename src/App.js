import React, {Component} from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import Rank from './Component/Rank/Rank';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';

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

class App extends Component {
    constructor(){
        super();

        this.state = {
            input: ''
        }

        this.onInputChange.bind(this);
        this.onButtonSubmit.bind(this);
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onButtonSubmit = () => {
        console.log("click");
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
            function(response) {
                console.log(response);
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
                {/* <FaceRecognition/> */}
            </div>
        );
    }
}

export default App;
