import Head from 'next/head';
import { Header } from '../components/Header';
import { extendTheme, ChakraProvider, Box} from '@chakra-ui/react'
import { Dashboard } from '../components/Dashboard';

export default function Home() {
  const theme = extendTheme({
    colors:{
      brand:{
        100: "#f7fafc",
        900: "#1a202c",
      },
    },
  })
  
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>KinvoApp</title>
      </Head>
      <Box>
      <Header/>
      <Dashboard/>
      </Box>
      
      </ChakraProvider>
  );
}
