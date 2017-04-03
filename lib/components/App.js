import React, { Component } from 'react';
require('../styles.scss')

class App extends Component {
  constructor() {
    super()
    this.state = {
      status: "idle",
      credits: 0,
      change: 0,
      selection: null,
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
