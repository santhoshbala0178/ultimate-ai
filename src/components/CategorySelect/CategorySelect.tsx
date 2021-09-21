import React from 'react'
import {SelectBox} from './CategorySelect.styles'

const CategorySelect = () => (
  <div>
    {/* Dummy Select Box - Details in Readme */}
    <SelectBox>
      <option value="none">Select a Conversation category</option>
      <option value="selectAll">All Categories</option>
      <option value="ecommerce">E-Commerce</option>
      <option value="airline">Airline</option>
    </SelectBox>
  </div>
)

export default CategorySelect
