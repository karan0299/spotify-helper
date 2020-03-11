import React from 'react'

// export const Track = (props) => {
//     return (
//         <h1>{props.track.color}</h1>
//     )
// }

class Track extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            track: props.track
        }
    }
    render() {
        const mystyle = {
            textAlign: "center",
            padding: "10px",
            height: "7.5rem",
            fontFamily: "Arial",
            background: "white",
            borderRadius: "3rem",
        };
        return (
            <div style={mystyle}>
                <div>{this.state.track.name}</div>
                <div>{this.state.track.artists[0].name}</div>
            </div >
        )
    }
}

export { Track }
