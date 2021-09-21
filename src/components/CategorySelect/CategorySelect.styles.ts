import styled from 'styled-components'

export const SelectBox = styled.select`
  display: block;
  width: 100%;
  max-width: 250px;
  height: 40px;
  margin: 10px auto;
  padding: 5px 10px;
  border-radius: 10px;
  background: ${(props) => props.theme.white};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
