import React from 'react'
import IntentCard from '../IntentCard'
import SelectAllConversations from '../SelectAllConversations'
import {
  ConversationsBlock,
  CountDiv,
  Header,
  ConversationsHeader,
  ConversationsContainer,
  NoMatches,
  SelectSummary,
} from './Conversations.styles'
import { ConversationsProps } from './Conversations.types'

const Conversations = ({
  allIntents,
  selectedIntents,
  setSelectedIntents,
  searchTerm,
  onIntentSelect,
  handleShowAllClick,
}: ConversationsProps) => {
  const isIntentVisible = (name: string, description: string) => {
      if(!searchTerm) return true;

    const condition =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase())

    return condition
  }

  const visibleIntents = allIntents.filter((intent) =>
    isIntentVisible(intent.name, intent.description),
  )

  return (
    <ConversationsBlock>
      <ConversationsHeader>
        <Header>Common Conversations</Header>
        <SelectSummary>
          <CountDiv>
            <b>{selectedIntents.length}</b>
            {` selected`}
          </CountDiv>
          <SelectAllConversations
            allIntents={allIntents}
            selectedIntents={selectedIntents}
            setSelectedIntents={setSelectedIntents}
          />
        </SelectSummary>
      </ConversationsHeader>
      <ConversationsContainer>
        {visibleIntents?.length > 0 ? (
          visibleIntents.map((intent, idx) => (
            <IntentCard
              key={`Card_${idx}`}
              intentData={intent}
              handleOnClick={onIntentSelect}
              handleShowAllClick={handleShowAllClick}
              isSelected={selectedIntents.includes(intent?.id)}
            />
          ))
        ) : (
          <NoMatches>No Matches Found !!</NoMatches>
        )}
      </ConversationsContainer>
    </ConversationsBlock>
  )
}

export default Conversations
