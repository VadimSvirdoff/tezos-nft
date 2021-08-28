import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from "@chakra-ui/react"
import { Provider } from 'react-redux';
import { store } from 'rtk';
import { theme } from 'styles/theme';
import { Header } from "components/header"
import { Notifications } from "components/notifications";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Flex pos="absolute" w="100%" h="100%">
          <Flex justifyContent="space-between" width="100%" flexDir="column">
            <Header />
            <Component {...pageProps} />
            <Notifications />
          </Flex>
        </Flex>
      </ChakraProvider>
    </Provider>

  )

}
export default MyApp
