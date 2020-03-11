import React, { Component } from 'react';
import SearchField from 'react-search-field'
import '../../styles/main.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { id: 0, value: 'ruby' },
                { id: 1, value: 'javascript' },
                { id: 2, value: 'lua' },
                { id: 3, value: 'go' },
                { id: 4, value: 'julia' }
            ]
        }
    }
    search(e) {
        this.props.onsearch(e)
    }
    render() {
        return (
            <SearchField
                placeholder="Search..."
                classNames="header--searchbar"
                onSearchClick={(e) => this.search(e)}
            />
        )
    }
}

export default SearchBar
