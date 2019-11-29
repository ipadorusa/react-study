import React, { Component } from "react";

class Gugudan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: ''
        }
    }
    onSubmit = e => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second) {
          this.setState((prevState) => {
            return {
              result: '정답' + prevState.value,
              first: Math.ceil(Math.random() * 9),
              second: Math.ceil(Math.random() * 9),
              value: ''
            }
          })
        }else {
            this.setState({
                result: '땡',
                value: ''
            })
        }
    }
    onChange = e => this.setState({value: e.target.value})

    render() {
        return (
            <div>
                <p>{this.state.first}곱하기{this.state.second}는?</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onChange}/>
                    <button type="submit">제출</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default Gugudan;