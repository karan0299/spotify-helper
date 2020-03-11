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
            search: false
        }
        this.searchTrack = this.searchTrack.bind(this)
        this.inputOnClick = this.inputOnClick.bind(this)
        this.onfilter = this.onfilter.bind(this)
    }
    async componentDidMount() {
        var res = this.props.location.hash.split("=")[1].split("&")[0]
        console.log(res)
        const ids = "6rqhFgbbKwnb9MLmUQDhG6,3G9gUGRgM4lB2ebVPUcMKI,3G9gUGRgM4lB2ebVPUcMKI,3G9gUGRgM4lB2ebVPUcMKI,6rPO02ozF3bM7NnOV4h6s2"
        await axios.get(`https://api.spotify.com/v1/tracks?ids=${ids}`, {
            headers: {
                'Authorization': "Bearer " + res
            }
        })
            .then(res => {
                console.log(res.data.tracks)
                this.setState({ tracks: res.data.tracks })
                this.setState({ flag: true })
            })
        this.forceUpdate()
    }

    onfilter() {
        var arr = []
        var x
        if (this.state.lowisChecked == true) {
            this.state.tracks.forEach(function (x, index) {
                if (x.popularity <= 5) {
                    arr.push(x)
                }
            })
        }
        if (this.state.mediumisChecked == true) {
            this.state.tracks.forEach(function (x, index) {
                if (x.popularity <= 30 && x.popularity >= 6) {
                    arr.push(x)
                }
            })
        }
        if (this.state.highisChecked == true) {
            this.state.tracks.forEach(function (x, index) {
                if (x.popularity >= 30) {
                    arr.push(x)
                }
            })
        }
        console.log(arr)
        this.setState({ filtered: arr, filter: this.state.highisChecked || this.state.mediumisChecked || this.state.lowisChecked })
    }

    inputOnClick(e, str) {
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

        // this.props.onclickfilter(this.state.lowisChecked, this.state.mediumisChecked, this.state.highisChecked)
    }

    searchTrack(e) {
        var arr = []
        this.state.tracks.forEach(function (x, index) {
            if (x.artists[0].name == e) {
                arr.push(x)
            }
        })
        this.setState({ filtered: arr, search: true })
    }

    render() {
        return (
            <div>
                <Header searchTrack={this.searchTrack} />
                <div className="popularity">
                    <p>Popularity</p>
                    <input
                        type="radio"
                        checked={this.state.lowisChecked}
                        onClick={(e) => this.inputOnClick(e, "low")}
                    /><span className="option">Low</span><br />
                    <input
                        type="radio"
                        checked={this.state.mediumisChecked}
                        onClick={(e) => this.inputOnClick(e, "mid")}
                    /><span className="option">Medium</span><br />
                    <input
                        type="radio"
                        checked={this.state.highisChecked}
                        onClick={(e) => this.inputOnClick(e, "high")}
                    /><span className="option">High</span><br />
                </div>
                <Carousel />
                {this.state.flag && !this.state.filter && !this.state.search ? (<Tracklist tracks={this.state.tracks} />) : (<Fragment />)}
                {this.state.flag && this.state.filter ? (<Tracklist tracks={this.state.filtered} />) : (<Fragment />)}
                {this.state.flag && this.state.search ? (<Tracklist tracks={this.state.filtered} />) : (<Fragment />)}

            </div>
        )

    }
}
export default Home
