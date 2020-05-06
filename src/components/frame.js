import React, { Component } from 'react';
import BandcampPlayer from 'react-bandcamp';


export class Frame extends Component {
    render() {
        return (
            <div>
                <BandcampPlayer 
                    className = "bandcamp"
                    // style = "border:0, width: 350px, height: 600px"
                    album="2328359174"
                    size="large"
                    bgcol="333333"
                    linkcol="ffffff"
                    merch= "null"
                    tracklist= "true"
                    artwork= "big"
                    height= "350"
                    width= "600"
                    title= "Bandcamp player"
                     />
            </div>
        );
    }
}

export default Frame;
