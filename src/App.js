import React, {Component} from 'react';
import 'tachyons';

import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import Rank from './Component/Rank/Rank';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';


class App extends Component {
    render() {
        return (
            <div className="App">
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
