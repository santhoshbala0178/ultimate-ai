import React, { useEffect } from 'react'
import SampleChat from '../SampleChat'
import {
  IntentHeader,
  IntentDescription,
  IntentDetail,
  IntentContainer,
  IntentName,
  SelectIntent,
  ShowMoreDetails,
  IntentBody,
} from './IntentCard.styles'
import { IntentCardProps } from './IntentCard.types'

const IntentCard = ({
  intentData,
  handleOnClick,
  handleShowAllClick,
  isSelected,
}: IntentCardProps) => {
  return (
    <IntentContainer>
      <IntentHeader onClick={(e) => handleOnClick(intentData?.id)}>
        <IntentDetail>
          <IntentName>{intentData?.name}</IntentName>
          <IntentDescription>
            {intentData?.description}
          </IntentDescription>
        </IntentDetail>
        <SelectIntent type="checkbox" checked={isSelected} onChange={(e) => {}}/>
      </IntentHeader>
      <IntentBody>
        <SampleChat intentData={intentData} />
        <ShowMoreDetails onClick={() => handleShowAllClick(intentData?.id)}>
          Show More Details
        </ShowMoreDetails>
      </IntentBody>
    </IntentContainer>
  )
}

export default IntentCard;
