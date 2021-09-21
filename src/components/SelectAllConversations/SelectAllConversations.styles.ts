import styled from 'styled-components'

export const SelectAll = styled.div<{ allSelected: boolean }>`
  border: 2px solid ${(props) => props.theme.white};
  font-weight: 700;
  width: 100px;
  margin: auto 30px;
  border-radius: 5px;
  background: ${(props) =>
    props.allSelected ? props.theme.secondary : props.theme.white};
  color: ${(props) => (props.allSelected ? props.theme.white : props.theme.secondary)};
  padding: 10px;
  cursor: pointer;

  &:hover {
    border-radius: 0px;
    background: ${(props) => props.theme.lightGray};
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`
