import React, { Component } from 'react'
import Select from '../form_input/Select'
import '../../styles/main.scss'


class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mediumisChecked: false,
            lowisChecked: false,
            highisChecked: false
        }
        this.inputOnClick = this.inputOnClick.bind(this)
    }

    inputOnClick(str) {
        switch (str) {
            case "low": this.setState({ lowisChecked: !this.state.lowisChecked })
                break
            case "mid": this.setState({ mediumisChecked: !this.state.mediumisChecked })
                break
            case "high": this.setState({ highisChecked: !this.state.highisChecked })
                break
        }
        // this.props.onclickfilter(this.state.lowisChecked, this.state.mediumisChecked, this.state.highisChecked)
    }

    render() {
        return (
            <div className="popularity">
                <p>Popularity</p>
                {/* <Select name="gender"
                    value={this.state.Popularity.value}
                    onChange={this.changeHandler}
                    options={this.state.Popularity.options}
                    touched={this.state.Popularity.touched}
                    valid={this.state.Popularity.valid}
                /> */}
                <input
                    type="radio"
                    checked={this.state.lowisChecked}
                    onClick={this.inputOnClick("low")}
                /><span className="option">Low</span><br />
                <input
                    type="radio"
                    checked={this.state.mediumisChecked}
                    onClick={this.inputOnClick("mid")}
                /><span className="option">Medium</span><br />
                <input
                    type="radio"
                    checked={this.state.highisChecked}
                    onClick={this.inputOnClick("high")}
                /><span className="option">High</span><br />
            </div>

        )
    }
}

export default Filter
