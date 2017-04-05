export default class Treats {
  constructor() {
    this.treatInfo = {
      A1: [{name: "Oreos", price: 75}],
      A2: [{name: "Reese's Pieces", price: 75}],
      A3: [{name: "Butterfinger", price: 75}],
      B1: [{name: "Twix", price: 75}],
      B2: [{name: "Snickers", price: 75}],
      B3: [{name: "Starburst", price: 75}],
      C1: [{name: "Doritos", price: 75}],
      C2: [{name: "Cheetos", price: 75}],
      C3: [{name: "Sun Chips", price: 75}],
    }
  }

  chooseTreat() {
  return Object.values(this.treatInfo).map(e => e[0].name)
  }
}
