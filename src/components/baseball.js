import React, { Component } from 'react';
import Try from './try';

function getNumbers() {

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: []
  }
  onSubmitFrom = (e) => {

  };
  onChangeInput = (e) => {

  };
  fruits = [
    {fruit: '사과', taste: '맛있다'},
    {fruit: '배', taste: '맛있다'},
    {fruit: '무', taste: '맛있다'},
    {fruit: '포토', taste: '맛있다'},
    {fruit: '딸기', taste: '맛있다'},
  ];
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitFrom}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <p>시도: {this.state.tries.length}</p>
        <ul>
          {
            this.fruits.map((v, i) => {
              return (
                <Try key={v.fruit + v.taste} value={v} idx={i} />
              );
            })
          }
        </ul>
      </React.Fragment>
    );
  };
}

export default NumberBaseball;