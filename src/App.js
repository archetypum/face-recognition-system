import React, {Component} from 'react';
import 'tachyons';

import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <Logo/>
                {/* <ImageLink/>
                <FaceRecognition/> */}
            </div>
        );
    }
}

export default App;
