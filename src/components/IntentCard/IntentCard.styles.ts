import styled from 'styled-components'

export const IntentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  padding-top: 15px;
  box-sizing: border-box;
  width: 25%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 10px;
  min-width: 350px;
  background: ${(props) => props.theme.white};
`

export const IntentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;
`

export const IntentDetail = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const SelectIntent = styled.input`
  cursor: pointer;
  height: 32px;
  width: 32px;
`

export const IntentName = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px;
`

export const IntentDescription = styled.div`
  color: ${(props) => props.theme.lightGray};
`

export const IntentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ShowMoreDetails = styled.div`
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.light};
    border-radius: 5px;
  }
`
