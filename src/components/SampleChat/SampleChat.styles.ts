import styled from 'styled-components'
import { ReactComponent as UserLogo } from '../../assets/user.svg'
import { ReactComponent as BotLogo } from '../../assets/bot.svg'

export const UserIcon = styled(UserLogo)`
  height: 32px;
  width: 32px;
  min-height: 32px;
  min-width: 32px;
`

export const BotIcon = styled(BotLogo)`
  height: 32px;
  width: 32px;
  min-height: 32px;
  min-width: 32px;
`

export const IntentExample = styled.div`
  padding: 15px 10px;
  border-radius: 10px;
  background: ${(props) => props.theme.aquaGreen};
  width: 80%;
  margin: auto;
`

export const UserInput = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`

export const BotReply = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ChatText = styled.div`
  margin: 10px 15px;
  font-style: italic;
`
