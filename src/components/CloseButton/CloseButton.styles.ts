import styled from 'styled-components'

export const PopupClose = styled.div`
  margin-left: auto;
  display: flex;
`

export const PopupCloseSvg = styled.svg`
  width: 25px;
  height: 25px;
  margin-left: auto;
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: ${(props) => props.theme.darkGray};
    border-radius: 50%;
  }
`
