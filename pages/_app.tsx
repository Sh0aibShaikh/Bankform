import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
