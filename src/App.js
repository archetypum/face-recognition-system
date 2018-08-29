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
import Signin from './Component/Signin/Signin';

// "https://samples.clarifai.com/face-det.jpg"

class App extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
            imageURL: '',
            boxes: [],
            route: 'signin'
        }
        this.onInputChange.bind(this);
        this.onButtonSubmit.bind(this);
        this.calculateFaceLocation.bind(this);
        this.displayFaceBox.bind(this);
        this.onRouteChange.bind(this);
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value})
        console.log(event.target.value);
    }
    onButtonSubmit = () => {
        this.setState({imageURL: this.state.input})
        console.log("click");
        app.models
            .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err));
    }
    calculateFaceLocation = (data) => {
        const regions = data.outputs[0].data.regions
        const clarifaiFaces = regions.map(region => region.region_info.bounding_box);
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return clarifaiFaces.map(clarifaiFace => {
            return({
                    leftCol: clarifaiFace.left_col * width,
                    topRow: clarifaiFace.top_row * height,
                    rightCol: width - (clarifaiFace.right_col * width),
                    bottomRow: height - (clarifaiFace.bottom_row * height)
                })
            })
    }
    displayFaceBox = (boxes) => {
        this.setState({boxes: boxes});
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        return (
            <div className="App">
                <Particles params={particleParams} className="particles"/>
                {
                this.state.route === "signin"
                ? <Signin onRouteChange={this.onRouteChange}/>
                :   <div>
                        <Navigation onRouteChange={this.onRouteChange}/>
                        <Logo/>
                        <Rank/>
                        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} /> 
                        <FaceRecognition boxes={this.state.boxes} imageURL={this.state.imageURL}/>
                    </div>
                }
            </div>
        );
    }
}

const app = new Clarifai.App({
    apiKey: 'c8f014310246404da6dd51e7f75dda73'
});
   
const particleParams = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 300,
                box: {}
            }
        }
    }
}

export default App;
