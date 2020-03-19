import React from 'react'

class Track extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            track: props.track,
            lview: props.lview,
            hover: false
        }

        this.hoverHander = this.hoverHander.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ track: nextProps.track });
        this.setState({ lview: nextProps.lview });
    }
    hoverHander() {
        this.setState({ hover: !this.state.hover })
    }
    render() {
        const mystyle = {
            textAlign: "center",
            padding: "10px",
            height: "7.5rem",
            fontFamily: "Arial",
            background: `url(${this.state.track.album.images[1].url})`,
            opacity: "1",
            borderRadius: "0.5rem",
            color: "black",
            fontWeight: "1000"

        };
        const myhoverstyle = {
            textAlign: "center",
            padding: "10px",
            paddingTop: "10px",
            fontSize: "1.5rem",
            height: "7.5rem",
            fontFamily: "Arial",
            background: "rgba(256,256,256,0.6)",
            borderRadius: "0.5rem",
            color: "black",
            fontWeight: "400"

        };

        const lmystyle = {
            display: "flex",
            flexDirection: "row",
            textAlign: "left",
            padding: "10px",
            paddingTop: "10px",
            fontSize: "1.5rem",
            height: "7.5rem",
            fontFamily: "Arial",
            background: "rgba(256,256,256,0.7)",
            borderRadius: "0.5rem",
            color: "black",
            fontWeight: "400"

        };
        return (
            <span style={{ opacity: "1" }}>
                {!this.state.lview ?
                    (this.state.hover ? (<div style={myhoverstyle} onMouseLeave={e => this.hoverHander(e)}>
                        <div>{this.state.track.name}</div>
                        <div>{this.state.track.artists[0].name}</div>
                    </div >) : (<div style={mystyle} onMouseEnter={e => this.hoverHander(e)}>
                    </div >)
                    ) : (<div style={lmystyle} >
                        <img src={this.state.track.album.images[1].url} alt={this.state.track.name} style={{ width: "8rem" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}><div>Track: {this.state.track.name}</div>
                            <div>Artist: {this.state.track.artists[0].name}</div></div>
                    </div >)
                }
            </span>

        )
    }
}

export { Track }
