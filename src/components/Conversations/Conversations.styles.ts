import styled from 'styled-components'

export const ConversationsBlock = styled.div`
  border-radius: 10px;
`

export const ConversationsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10px 0px;
  margin: 10px 0px;
  text-align: center;
`

export const Header = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.light};
  font-size: 32px;
  margin-top: 30px;
`

export const CountDiv = styled.div`
  text-align: center;
  font-style: italic;
  color: ${(props) => props.theme.white};
`

export const SelectSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const ConversationsContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const NoMatches = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.white};
`
