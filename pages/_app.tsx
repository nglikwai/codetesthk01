import { Provider as ReduxProvider } from 'react-redux'
import { AppProps } from 'next/app'
import { store } from '../src/redux/store'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../Theme'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PingFang HK";
    background: ${({ theme }) => theme.secondaryBackgroundColor};
    transition: 2s;

  }
`


function MyApp({ Component, pageProps }: AppProps) {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const onDarkModeChange = () => setIsDarkMode(!isDarkMode)

  return (
    <>

      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ReduxProvider store={store}>
          <DarkModeButton onClick={onDarkModeChange}>Dark Mode</DarkModeButton>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp


const DarkModeButton = styled.button`
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  border: none;
  transition:  2s;

`