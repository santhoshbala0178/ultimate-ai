import React from 'react'
import { BotIcon, BotReply, ChatText, IntentExample, UserIcon, UserInput } from './SampleChat.styles'
import { SampleChatProps } from './SampleChat.types'


const SampleChat = ({intentData}: SampleChatProps) => (
  <IntentExample>
    <UserInput>
      <UserIcon />
      <ChatText>{intentData?.trainingData?.expressions[0]?.text}</ChatText>
    </UserInput>
    <BotReply>
      <ChatText>{intentData?.reply?.text}</ChatText>
        <BotIcon />
    </BotReply>
  </IntentExample>
)
export default SampleChat
