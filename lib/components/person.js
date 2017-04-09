import React from 'react';
import { render } from 'react-dom';
import Button from './button'


class Person extends React.Component {
  constructor() {
    super()
    this.state = {
      credits: 500,
    }
  }

  handleCreditToVending(e, value) {
    this.setState({credits: +value + +this.state.credits})
  }

  render() {
    return(
      <div>
        <Button
          text='$1.00'
          className='one-dollar'
          onClick={e => this.handleCreditToVending(e, 100)}
        />
        <Button
          text='$5.00'
          className='five-dollar'
          onClick={e => this.handleCreditToVending(e, 500)}
        />
        <Button
          text='$10.00'
          className='ten-dollar'
          onClick={e => this.handleCreditToVending(e, 1000)}
        />
        <Button
          text='$20.00'
          className='twenty-dollar'
          onClick={e => this.handleCreditToVending(e, 2000)}
        />
      </div>
    )
  }
}

module.exports = Person
