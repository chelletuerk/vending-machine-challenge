require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
// const App = require('../../lib/components/App')
import App from '../../lib/components/App'
const Person = require('../../lib/components/Person').default

describe('Elevator', function() {
  const vendingMachine = new App()
  const alex = new Person("Alex", 100)

  afterEach(function() {
    vendingMachine.reset();
  });

  xit('should bring a rider to a floor above their current floor', () => {
    // Assert the current status of the vendingMachine is idle
    assert.equal(vendingMachine.status, 'idle')

    // Alex inserts a dollar into the vending machine
    vendingMachine.insertCredit(alex, 100)

    // Assert the current status of the vendingMachine is 'credited' after credits inserted
    assert.equal(vendingMachine.status, 'credited')
    // Assert the total number of credits is 100 cents ($1.00) after credits inserted
    assert.equal(vendingMachine.credits, 100)
    // Assert the total number of change is 0 cents ($0.00) before selection is made
    assert.equal(vendingMachine.change, 0)
  });

});
