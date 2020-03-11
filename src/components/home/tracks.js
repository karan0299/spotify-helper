import React, { Component } from 'react'
import { Track } from './individualTrack'
import StackGrid from 'react-stack-grid';
import '../../styles/main.scss'

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: props.tracks
        }
    }

    render() {
        const style = {
            margin: "50 px",
            marginTop: " 100 px"
        }
        return (
            <div className="grid">
                <StackGrid
                    columnWidth={300}
                    style={style}
                    gutterWidth={40}
                    gutterHeight={20}
                >
                    {this.state.tracks.map((track) => <Track track={track} />)}
                </StackGrid>
            </div>
        )
    }
}

export default TrackList;
