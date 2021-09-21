import styled from 'styled-components';

export const SelectIntentsBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const PresetsBlock = styled.div<{isSelected: boolean }>`
  border: 2px solid ${(props) => props.theme.white};
  font-weight: 700;
  border-radius : 5px;
  background: ${props => props.isSelected && props.theme.secondary};
  color: ${(props) => props.theme.white};
  padding: 15px 10px;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: ${props => props.isSelected ? props.theme.white : props.theme.secondary};
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}
`;

