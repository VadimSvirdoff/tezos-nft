import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'react-redux';
import { store } from 'rtk';
import { theme } from 'styles/theme';
import { Header } from "components/header"
import { Notifications } from "components/notifications"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Notifications />
      </ChakraProvider>
    </Provider>

  )

}
export default MyApp
