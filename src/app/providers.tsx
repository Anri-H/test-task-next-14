'use client';

import {
  Box,
  Button,
  ChakraProvider,
  ColorModeScript,
  Container,
  Link,
  Text,
} from '@chakra-ui/react';
import { signOut } from 'next-auth/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const handleLogOut = () => {
    signOut();
  };

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Container maxW="4xl" mb={100}>
        <Box
          paddingBlock={10}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">
            <Text fontSize="5xl" color="yellow" cursor="pointer">
              The Star Wars Films
            </Text>
          </Link>
          <Button onClick={handleLogOut}>Log out</Button>
        </Box>
        {children}
      </Container>
    </ChakraProvider>
  );
};
