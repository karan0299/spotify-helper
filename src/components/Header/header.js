import React, { Component, Fragment } from 'react'
import SearchBar from './searchbar'
import spotify1 from '../../assets/spotify1.jpeg'
import '../../styles/main.scss'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signout: false
        }

        this.signout = this.signout.bind(this)
        this.searchField = this.searchField.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({ signout: props.signout })
    }

    signout() {
        this.props.showsignout()
    }

    searchField(e) {
        this.props.searchTrack(e)
    }

    render() {
        return (
            <div className='header' >
                <div className='header--logo'>
                    <img className='header--logo-image' src={spotify1} alt='logo' />
                </div>
                <div className='header--search'>
                    <SearchBar onsearch={this.searchField} />
                </div>
                {/* <div className='header--name'>InstaVote</div> */}
                {/* <div className='header--user' onClick={this.signout}>
                    {localStorage.getItem('name')}
                </div> */}
                {/* <div className='header--user-image' onClick={this.signout}>
                    <img className='header--image' alt='user' src={localStorage.getItem('image')} />
                </div>
                {this.state.signout ? <SignOut /> : <Fragment />} */}
            </div>
        )
    }
}

export default Header
