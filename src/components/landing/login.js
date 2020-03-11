import React, { Component } from 'react'
import Carousel from '../home/carousel'
import LoginButton from '../buttons/login_button'
class Login extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <LoginButton />
            </div>
        )
    }
}

export default Login
