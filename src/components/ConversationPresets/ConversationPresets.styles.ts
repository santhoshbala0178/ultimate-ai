import styled from 'styled-components'

export const ConversationPresetsContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 10px 0px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  margin-right: 20px;
`
