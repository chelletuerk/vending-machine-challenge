import React from 'react';
import { render } from 'react-dom';
import Button from './button'


class Person extends React.Component {
  constructor() {
    super()
    this.state = {
      credits: 500
    }
  }

  handleCreditToVending() {
    console.log('one dolla make you holla');
  }

  render() {
    return(
      <div>
        <Button
          text='$1.00'
          className='one-dollar'
          handleClick={e => this.handleCreditToVending()}
        />
      </div>
    )
  }
}

module.exports = Person
