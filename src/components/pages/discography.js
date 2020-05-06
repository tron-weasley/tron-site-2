import React, {Component} from 'react'

class Discography extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="wrapper">
                            <h1>Discography</h1>
                            <ul className="albums">
                            <li className="scene">
                                <div className="album">
                                    <div className="poster"></div>
                                    <div className="info">
                                    <header>
                                        <div>
                                            <h1 id="tom">Magnetic Router Sounds, Vol. 1</h1>
                                            <span className="year">2020</span>
                                            <span className="rating">PG</span>
                                            <span className="duration">30 minutes</span>
                                        </div>
                                    </header>
                                    <p>
                                        Magnetic Router Sounds: an ongoing series of moods colored within and around an effervescent electronic backdrop. This volume was made with a Yamaha DX7 and a Hammond Auto-Vari 64. 
                                    </p>
                                    </div>
                                </div>
                            </li>  
                            <li className="scene">
                                    <div className="album">
                                        <div className="poster"></div>
                                        <div className="info">
                                        <header>
                                            <div>
                                                <h1 id="tom">Modal Fixture</h1>
                                                <span className="year">2020</span>
                                                <span className="rating">PG-13</span>
                                                <span className="duration">50 minutes</span>
                                            </div>
                                        </header>
                                        <p>
                                            These are the Episodes from the Modal Fixture: scenes and messages from the modern folklore of the collectively unconscious. Coming Summer 2020!
                                        </p>
                                        </div>
                                    </div>
                                </li>
                        <li className="scene">
                                <div className="album">
                                    <div className="poster"></div>
                                    <div className="info">
                                    <header>
                                        <div>
                                            <h1 id="tom">Medieval Surges</h1>
                                            <span className="year">2020</span>
                                            <span className="rating">R</span>
                                            <span className="duration">35 minutes</span>
                                        </div>
                                    </header>
                                    <p>
                                        Medieval Surges: Metallic Action, Emotional Abstraction. Coming Fall 2020!
                                    </p>
                                    </div>
                                </div>
                            </li>
                            <li className="scene">
                                    <div className="album">
                                        <div className="poster"></div>
                                        <div className="info">
                                        <header>
                                            <div>
                                                <h1 id="tom">Maybe I'm a Leo</h1>
                                                <span className="year">2020</span>
                                                <span className="rating">PG-13</span>
                                                <span className="duration">30 minutes</span>
                                            </div>
                                        </header>
                                        <p>
                                            Maybe I'm a Leo: a collection of reinterpretations of pieces from Leonard Nemoy's solo work. Coming Fall 2020!
                                        </p>
                                        </div>
                                    </div>
                                </li>
                        </ul> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Discography;
