import React from 'react';
import { render } from 'react-dom';
require('../styles.scss')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      status: "idle",
      credits: 0,
      change: 0,
      selection: null,
      treats: {
        A1: 10,
        A2: 10,
        A3: 10,
        B1: 10,
        B2: 10,
        B3: 10,
        C1: 10,
        C2: 10,
        C3: 10,
      }
    }
    this.handleCreditInput = this.handleCreditInput.bind(this)
  }

  handleCreditInput(e) {
    this.setState({credits: e.target.value})
  }

  reset() {
    this.constructor()
  }

  render() {
    return(
    <div>
      <input className='credit-input' onChange={this.handleCreditInput}></input>
    </div>
    )
  }
}

module.exports = App
