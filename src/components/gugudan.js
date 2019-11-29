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
<<<<<<< HEAD:src/components/study.js
            this.setState((prevState) => ({
                result: '정답' + prevState.value,
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: ''
            }))
=======
          this.setState((prevState) => 
            ({
              result: '정답' + prevState.value,
              first: Math.ceil(Math.random() * 9),
              second: Math.ceil(Math.random() * 9),
              value: ''
            })
          )
>>>>>>> 4080d80ba5a95720a748017dd44860a673a4682d:src/components/gugudan.js
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