import React, { Component } from 'react';
import BandcampPlayer from 'react-bandcamp';

export class Frame extends Component {
    render() {
        return (
            <div>
                <BandcampPlayer 
                    album="2328359174"
                    size="large"
                    bgcol="333333"
                    linkcol="ffffff"
                    merch= "null"
                    tracklist= "true"
                    artwork= "big"
                    height= "600px"
                    width= "350px"
                    title= "Bandcamp player"
                     />
            </div>
        );
    }
}

export default Frame;
