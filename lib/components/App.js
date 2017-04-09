import React from 'react';
import { render } from 'react-dom';
import Button from './button'
import Treats from './Treats'
import Person from './Person'
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
    // this.handleCreditInput = this.handleCreditInput.bind(this)
  }

  // handleCreditInput(e) {
  //   this.setState({credits: e.target.value})
  // }

  renderTreatButtons() {
    // ["Oreos", "Reeses Pieces"] // <=> this.state.treats.chooseTreat()
    // ["A1", "A2"] // <=> this.state.treats.dispenseTreat()

    return this.state.treats.treatNames().map((treatName, i) => {
      return (
        <Button
          key={i}
          text={treatName}
          className='treats-btn'
          onClick={e => {
           const treatKey = this.state.treats.treatKeys()[i]
           console.log(this.state.treats.treatInfo)
           this.state.treats.dispenseTreat(treatKey)
           console.log(this.state.treats.treatInfo)
           this.state.treats.subtractCredits(treatKey)[i]
          }
          }
        />
      )
    })
  }

  render() {
    return(
    <div>
      {/* <input
        value={this.state.credits}
        placeholder='Yo Credits'
        className='credit-input'
        onChange={this.handleCreditInput}>
      </input> */}
      <Person/>
      {this.renderTreatButtons()}
    </div>
    )
  }
}

module.exports = App
