import { Provider as ReduxProvider } from 'react-redux'
import { AppProps } from 'next/app'
import { store } from '../src/redux/store'
import { createGlobalStyle } from 'styled-components'
import ThemeProvider from '../src/ThemeProvider'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PingFang HK"

  }
`


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <ThemeProvider>
        <GlobalStyle />
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
