import React, { Component } from 'react';
import Frame from '../frame';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <Frame />
                <div className="welcome">
                    <p>Magnetic Router Sounds, Vol. 1 is out NOW!</p>
                </div> 
            </div>
        );
    }
}

export default Home;
