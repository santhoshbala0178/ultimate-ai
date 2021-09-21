import React from 'react'
import {SearchBox, SearchContainer} from './SearchIntent.styles'
import { SearchIntentProps } from './SearchIntent.types'

const SearchIntent = ({
  searchTerm,
  modifySearchTerm,
}: SearchIntentProps) => (
  <SearchContainer>
    <SearchBox
      type="text"
      placeholder="Search Conversations..."
      value={searchTerm}
      onChange={(e) => modifySearchTerm(e.target.value)}
    />
  </SearchContainer>
)

export default SearchIntent
