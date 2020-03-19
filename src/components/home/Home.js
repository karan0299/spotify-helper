import React, { Component, Fragment } from 'react'
import Tracklist from './tracks'
import Header from '../Header/header'
import Carousel from './carousel'
import axios from 'axios'
// import Filter from './Filter'


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tracks: [],
            flag: false,
            filtered: [],
            filter: false,
            mediumisChecked: false,
            lowisChecked: false,
            highisChecked: false,
            search: false,
            id: "",
            listview: false
        }
        this.searchTrack = this.searchTrack.bind(this)
        this.inputOnClick = this.inputOnClick.bind(this)
        this.onfilter = this.onfilter.bind(this)
    }
    async componentDidMount() {
        var res = this.props.location.hash.split("=")[1].split("&")[0]
        this.setState({ id: res })
        console.log(res)
        await axios.get(`https://api.spotify.com/v1/search?q=rock&type=track`, {
            headers: {
                'Authorization': "Bearer " + res
            }
        })
            .then(res => {
                console.log(res.data.tracks.items)
                this.setState({ tracks: res.data.tracks.items })
                this.setState({ flag: true })
            })
        this.forceUpdate()
    }

    onfilter() {
        let arr = []

        this.state.tracks.forEach((x, index) => {
            if (x.popularity <= 48 && this.state.lowisChecked == true) {
                arr.push(x)
            }
            else if (x.popularity <= 65 && x.popularity >= 49 && this.state.mediumisChecked == true) {
                arr.push(x)
            }
            else if (x.popularity >= 66 && this.state.highisChecked == true) {
                arr.push(x)
            }
        })
        this.setState({ filtered: arr, filter: this.state.highisChecked || this.state.mediumisChecked || this.state.lowisChecked })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    inputOnClick(e, str) {
        this.setState({
            filtered: []
        })
        var low = this.state.lowisChecked
        var high = this.state.highisChecked
        var mid = this.state.mediumisChecked
        switch (str) {
            case "low": this.setState({ lowisChecked: !low }, () => this.onfilter())
                break
            case "mid": this.setState({ mediumisChecked: !mid }, () => this.onfilter())
                break
            case "high": this.setState({ highisChecked: !high }, () => this.onfilter())
                break
        }

    }

    async searchTrack(e) {
        var arr = []
        if (e == '') {
            this.setState({ search: false })
            return
        }
        e = e.replace(" ", "%20");
        await axios.get(`https://api.spotify.com/v1/search?q=${e}&type=track`, {
            headers: {
                'Authorization': "Bearer " + this.state.id
            }
        })
            .then(resp => {
                console.log(resp)
                this.setState({ tracks: resp.data.tracks.items })
                // this.setState({ search: true })
            })
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <Header searchTrack={this.searchTrack} />
                <div className="popularity">
                    <div style={{ background: "#afeeee" }}>Popularity</div>
                    <input
                        type="checkbox"
                        checked={this.state.lowisChecked}
                        onClick={(e) => this.inputOnClick(e, "low")}
                    /><span className="option">Low</span><br />
                    <input
                        type="checkbox"
                        checked={this.state.mediumisChecked}
                        onClick={(e) => this.inputOnClick(e, "mid")}
                    /><span className="option">Medium</span><br />
                    <input
                        type="checkbox"
                        checked={this.state.highisChecked}
                        onClick={(e) => this.inputOnClick(e, "high")}
                    /><span className="option">High</span><br />
                </div>
                <Carousel />
                <div style={{ display: "flex", flexDirection: "row", marginTop: "28.5rem", marginLeft: "16rem", height: "3rem", position: "absolute", textAlign: "center", fontSize: "1.3rem" }}>
                    <div style={{ backgroundColor: this.state.listview ? "#D3D3D3" : "white", width: "31rem", paddingTop: "0.7rem" }} onClick={(e) => this.setState({ listview: false })}>Gridview</div>
                    <div style={{ backgroundColor: !this.state.listview ? "#D3D3D3" : "white", width: "29.5rem", paddingTop: "0.7rem" }} onClick={(e) => this.setState({ listview: true })}>listview</div>
                </div>
                {this.state.flag && !this.state.filter ? (<Tracklist tracks={this.state.tracks} lgview={this.state.listview} />) : (<Fragment />)}
                {this.state.flag && this.state.filter ? (<Tracklist tracks={this.state.filtered} lgview={this.state.listview} />) : (<Fragment />)}
            </div>
        )

    }
}
export default Home
