import React from 'react';
import { render } from 'react-dom';
import Button from './button'
import Treats from './Treats'
require('../styles.scss')


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      status: "idle",
      credits: 0,
      change: 0,
      selection: null,
      treats: new Treats(),
    }
    this.handleCreditInput = this.handleCreditInput.bind(this)
  }

  handleCreditInput(e) {
    this.setState({credits: e.target.value})
  }

  // reset() {
  //   this.constructor()
  // }

  render() {
    return(
    <div>
      <input
        value={this.state.credits}
        placeholder='Yo Credits'
        className='credit-input'
        onChange={this.handleCreditInput}>
      </input>
      <Button
        text='Oreos'
        className='treats-btn'
        handleClick={
          e => console.log(this.state.treats.chooseTreat())
        }
      />
    </div>
    )
  }
}

module.exports = App
