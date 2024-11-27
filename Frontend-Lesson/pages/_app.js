import * as React from "react"
import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <link href='https://fonts.googleapis.com/css?family=Sigmar' rel='stylesheet'></link>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
