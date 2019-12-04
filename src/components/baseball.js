import React, { Component } from 'react';
import Try from './try';

function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i++) {
    const choosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(choosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: []
  }
  onSubmitFrom = (e) => {
    e.preventDefault();
    if(this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '홈런',
        tries: [...this.state.tries, { try: this.state.value, result: '홈런!'}]
      });
      alert('게임을 다시 시작합니다.');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: []
      });
    }else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries >= 9) {
        this.setState({
          result: `10번 넘게 틀림 답은 ${this.state.answer.join('')} 였습니다.`
        });
        alert('게임을 다시 시작합니다.');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: []
        });
      }else {
        for(let i = 0; i < 4; i++) {
          if(answerArray[i] === this.state.answer[i]) {
            strike += 1;
          }else if(this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [...this.state.tries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 입니다`}],
          value: ''
        })
      }
    }
  };
  onChangeInput = (e) => {
    console.log(this.state.value)
    this.setState({
      value: e.target.value
    });
  };

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
            this.state.tries.map((v, i) => {
              return (
                <Try key={`${i + 1}차 시도 : `} tryInfo={v} idx={i} />
              );
            })
          }
        </ul>
      </React.Fragment>
    );
  };
}

export default NumberBaseball;