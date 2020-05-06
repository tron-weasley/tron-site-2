import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div className="home">
            
                {/* <div className= "bandcamp">
                    <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2328359174/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="http://tronweasley.bandcamp.com/album/magnetic-router-sounds-vol-1">Magnetic Router Sounds Vol. 1 by Tron Weasley</a></iframe>
                </div> */}
    
                <div className="welcome">
                    <p>Magnetic Router Sounds, Vol. 1 is out NOW!</p>
                </div> 
            </div>
        );
    }
}

export default Home;
