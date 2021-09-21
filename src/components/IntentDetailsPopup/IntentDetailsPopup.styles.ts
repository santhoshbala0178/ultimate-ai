import styled from 'styled-components'

export const TransparentDiv = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`

export const PopupContainer = styled.div`
  position: fixed;
  top: 25%;
  min-width: 600px;
  max-width: 600px;
  max-height: 90vh;
  background-color: ${(props) => props.theme.white};
  border-radius: 16px;
  padding: 20px;
`

export const PopupHeader = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 10px;
`

export const IntentNameContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px;
`

export const IntentName = styled.div`
  margin: auto;
  font-size: 18px;
  font-weight: 600;
`

export const DescriptionText = styled.div`
  margin: 20px auto;
  text-align: center;
  color: ${(props) => props.theme.lightGray};
`

export const BotReplyText = styled.div`
  margin: 20px auto;
  text-align: center;
`

export const PlaceHolder = styled.span`
  font-style: italic;
  font-weight: 600;
`

export const List = styled.ul`
  width: 50%;
  margin: auto;
`

export const BotExpressionText = styled.li`
  margin: 5px auto;
  padding: 10px;
  border-radius: 10px;
`
