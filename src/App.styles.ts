import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px;
  background: ${(props) => props.theme.primary};
`

export const CompanyLogoContainer = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  img{object-fit: cover};
`

export const PageHeader = styled.div`
  padding: 10px 0px;
  border-radius: 10px;
`

export const SaveContainer = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  height: 70px;
  padding: 10px 30px;
  background: ${(props) => props.theme.white};
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: inset 0px 2px 3px 2px rgba(0, 0, 0, 0.1),
    -44px -35px 2px -11px rgb(0 0 0 / 0%);
`

export const SaveButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
