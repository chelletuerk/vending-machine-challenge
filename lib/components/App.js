import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      credits: 0,
    }
  }

  render() {
    return(
    <div>
      <h1>Render me, Dammit</h1>
    </div>
    )
  }
}

module.exports = App
