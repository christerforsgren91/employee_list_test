import styled from 'styled-components'

export const EmployeeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 100px;
  width: auto;
`
export const EmployeeCard = styled.div`
  z-index: 0;
  width: 300px;
  position: relative;
  overflow: hidden;
  &:hover {
    z-index: 1;
    background-color: ${(props) => props.theme.background};
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease;

    & p {
      transform: translateY(0);
    }
  }
`

export const EmployeeImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`
export const EmployeeName = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Nunito', sans-serif;
  padding-top: 1rem;
  padding-bottom: 2rem;
`
export const EmployeeMail = styled.p`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  max-height: 100%;
  transform: translateY(180%);
  transition: transform 0.1s ease-in;
`
