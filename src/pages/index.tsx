import Head from 'next/head';
import { Header } from '../components/Header';
import { extendTheme, ChakraProvider, Box, Text } from '@chakra-ui/react';
import { Dashboard } from '../components/Dashboard';

export default function Home() {
  const theme = extendTheme({
    fontFamily: 'Montserrat, sans-serif',
    colors: {
      brand: {
        100: '#f7fafc',
        900: '#1a202c'
      }
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>KinvoApp</title>
      </Head>
      <Box w="100%" h="100vh" bg="gray.800">
        <Header />
      </Box>
      {/*
      <Box>
      <Dashboard/>
      </Box> */}
    </ChakraProvider>
  );
}
