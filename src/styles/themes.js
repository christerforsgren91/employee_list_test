import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fff',
  fontColor: '#696969',
}

export const darkTheme = {
  body: '#2B2B2B',
  fontColor: '#F8F8FF',
  background: '#423F3E',
}

export const GlobalStyles = createGlobalStyle`
	body {
    background-color: ${(props) => props.theme.body};
    font-family: 'Nunito', sans-serif;
  }

  background {
    background-color: #423F3E;
    &:hover {
      ${(props) => props.theme.background}
    }
  };
`
