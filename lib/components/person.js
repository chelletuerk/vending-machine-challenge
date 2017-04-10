import React from 'react';
import Button from './button'

const ONE_DOLLAR = '$1.00'
const FIVE_DOLLARS = '$5.00'
const TEN_DOLLARS = '$10.00'
const TWENTY_DOLLARS = '$20.00'

const ONE_HUNDRED_CREDITS = 100
const FIVE_HUNDRED_CREDITS = 500
const ONE_THOUSAND_CREDITS = 1000
const TWO_THOUSAND_CREDITS = 2000

const Person = (props) => {
  const { handleCreditToVending } = props

  return(
    <div className='dollar-btns'>
      <Button
        text={ONE_DOLLAR}
        className='dollars'
        onClick={e => handleCreditToVending(e, ONE_HUNDRED_CREDITS)}
      />
      <Button
        text={FIVE_DOLLARS}
        className='dollars'
        onClick={e => handleCreditToVending(e, FIVE_HUNDRED_CREDITS)}
      />
      <Button
        text={TEN_DOLLARS}
        className='dollars'
        onClick={e => handleCreditToVending(e, ONE_THOUSAND_CREDITS)}
      />
      <Button
        text={TWENTY_DOLLARS}
        className='dollars'
        onClick={e => handleCreditToVending(e, TWO_THOUSAND_CREDITS)}
      />
    </div>
  )
}

export default Person
