import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 60px;
  border-radius: 60px;
  margin: 10px auto;
  overflow: hidden;
  margin-bottom: 30px;
  &:focus-within {
    outline: none;
    box-shadow: inset 0 1px 1px rgba(135, 206, 250, 0.075),
      0 0 8px rgba(135, 206, 250, 0.9);
  }
`

export const SearchBox = styled.input`
  padding: 0px 20px;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  border: none;
  color: ${(props) => props.theme.darkGray};
  &:focus {
    outline: none;
  }
`
