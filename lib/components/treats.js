export default class Treats {
  constructor() {
    this.treatInfo = {
      A1: this.makeTreatArray('Oreos', 75),
      A2: this.makeTreatArray(`Reese's Pieces`, 75),
      A3: this.makeTreatArray('Butterfinger', 75),
      B1: this.makeTreatArray('Twix', 75),
      B2: this.makeTreatArray('Snickers', 75),
      B3: this.makeTreatArray('Starburst', 75),
      C1: this.makeTreatArray('Doritos', 75),
      C2: this.makeTreatArray('Cheetos', 75),
      C3: this.makeTreatArray('Sun Chips', 75),
    }
  }

  makeTreatArray(name, price) {
    return Array.from({ length: 5 }).map(() => ({ name, price}))
  }

  treatNames() {
    return Object.values(this.treatInfo).map(treats => {
      const treat = treats[0];
      return !treat ? 'No More Cavities Bruh' : treat.name
    })
  }

  treatKeys() {
    return Object.keys(this.treatInfo)
  }

  dispenseTreat(key) {
    return this.treatInfo[key].pop()
  }

  subtractCredits() {
    return Object.values(this.treatInfo).map(treatPrice => {
      const selectedTreat = treatPrice[0];
      return !selectedTreat ? 0 : selectedTreat.price
    })
  }
}
