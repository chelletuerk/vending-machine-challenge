import React from 'react';
import Button from './button'
import Treats from './Treats'
import Person from './Person'
import '../styles.scss'

const INITIAL_CREDITS = 500

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      credits: INITIAL_CREDITS,
      change: 0,
      treats: new Treats(),
    }

    this.handleCreditToVending = this.handleCreditToVending.bind(this)
    this.makePersonPoorer = this.makePersonPoorer.bind(this)
  }

  handleCreditToVending(e, value) {
    this.setState({credits: +value + +this.state.credits})
  }

  makePersonPoorer(index) {
    return (e) => {
      const { treats, credits } = this.state
      const treatKey = treats.treatKeys()[index]

      treats.dispenseTreat(treatKey)

      const cost = treats.subtractCredits(treatKey)[index]
      const newTotal = credits - cost

      if (newTotal < 1) return alert('You are out of scratch')

      this.setState({ credits: newTotal })
    }
  }

  renderTreatButtons() {
    return this.state.treats.treatNames().map((treatName, index) => {
      return (
        <div key={index} className='candy-btns'>
          <Button
            key={index}
            text={treatName}
            className='treats-btn'
            onClick={(e) => this.makePersonPoorer(index)(e)}
          />
        </div>
      )
    })
  }

  render() {
    return(
    <div>
      <Person
        handleCreditToVending={this.handleCreditToVending}
      />
      {this.renderTreatButtons()}
    </div>
    )
  }
}

module.exports = App
