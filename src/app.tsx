import { ChakraProvider, Heading } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <Heading>Hello, world!</Heading>;
    </ChakraProvider>
  );
}
