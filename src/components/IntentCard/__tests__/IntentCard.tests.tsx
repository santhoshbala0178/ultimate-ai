import { render, screen,fireEvent } from '@testing-library/react'
import React from 'react'
import IntentCard from '../IntentCard';
import { SAMPLE_INTENT_DATA } from './IntentCard.mocks';


describe('test intent select and show all details', () => {
  const handleOnClick = jest.fn()
  const handleShowAllClick = jest.fn()
  
  beforeEach(() => {
    render(<IntentCard intentData={SAMPLE_INTENT_DATA} handleOnClick={handleOnClick} handleShowAllClick={handleShowAllClick} isSelected={false}/>)
  })

  it('calls handleOnClick when intent is selected', () => {
    fireEvent.click(screen.getByText(/Greeting/i))
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })


  it('calls handleShowAllClick when show more details is clicked', () => {
    fireEvent.click(screen.getByText(/Show More Details/i))
    expect(handleShowAllClick).toHaveBeenCalledTimes(1)
  })
})