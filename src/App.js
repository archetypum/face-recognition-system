import React, {Component} from 'react';
import 'tachyons';
import Particles from 'react-particles-js';

import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import Rank from './Component/Rank/Rank';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';

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
    render() {
        return (
            <div className="App">
                <Particles params={particleParams} className="particles"/>
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm/> 
                {/* <FaceRecognition/> */}
            </div>
        );
    }
}

export default App;
