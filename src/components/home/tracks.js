import React, { Component } from 'react'
import { Track } from './individualTrack'
import StackGrid from 'react-stack-grid';
import '../../styles/main.scss'

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: props.tracks,
            lgview: props.lgview
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ tracks: nextProps.tracks });
        this.setState({ lgview: nextProps.lgview });
        this.forceUpdate()
    }
    shouldComponentUpdate(nextProps) {
        console.log(nextProps.tracks)
        return true
    }
    render() {
        const style = {
            margin: "50 px",
            marginTop: " 100 px",
        }
        return (
            <div className="grid">
                {!this.state.lgview ? (<StackGrid
                    columnWidth={300}
                    style={style}
                    gutterWidth={10}
                    gutterHeight={10}
                >
                    {this.state.tracks.map((track) => <Track track={track} lview={false} />)}
                </StackGrid>) : (<StackGrid
                    columnWidth={1000}
                    style={style}
                    gutterHeight={10}
                >
                    {this.state.tracks.map((track) => <Track track={track} lview={true} />)}
                </StackGrid>)}
            </div>
        )
    }
}

export default TrackList;
