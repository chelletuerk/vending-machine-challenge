import React, { Component } from 'react';
require('../styles.scss')

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
