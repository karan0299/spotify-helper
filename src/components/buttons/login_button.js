import React, { Component } from 'react'
import axios from 'axios'

class LoginButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            client_id: "b1ee1169f0ee4993aeb8f089b706a78c"
        }
    }

    loginButtonPress() {
        axios.get("https://accounts.spotify.com/authorize", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'crossdomain': true
            },
            data: {
                'client_id': this.state.client_id,
                'response_type': "token",
                'redirect_uri': "https://spotifyrescues.herokuapp.com/home"
            }
        })
            .then(res => {
                console.log(res)
            })


        var url = 'https://accounts.spotify.com/authorize?client_id=' + this.state.client_id +
            '&response_type=token' +
            '&scope=playlist-read-private%20playlist-modify%20playlist-modify-private' +
            '&redirect_uri=' + encodeURIComponent('https://spotifyrescues.herokuapp.com/home');

        // localStorage.setItem('createplaylist-tracks', JSON.stringify(g_tracks));
        // localStorage.setItem('createplaylist-name', g_name);
        window.location = url
    }

    render() {
        return (
            <button className="login_button" onClick={this.loginButtonPress.bind(this)}>Login</button>
        )
    }
}

export default LoginButton
