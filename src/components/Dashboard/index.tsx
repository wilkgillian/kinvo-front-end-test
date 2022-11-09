import { Grid, Box, Text, Image } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Options } from '../Options';
import { Summary } from '../Summary';

export function Dashboard() {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(2, 2fr)" bg="#EEF2F4">
      <Box h="100vh" w="220px" gridColumn="1" bg="#F8FAFB">
        <Options/>
      </Box>
      <Box mt={6} w="100%" gridColumn="2" mr={6}>
        <Text mb={4} fontWeight="bold" fontSize="20px" color="#4C309B">
          Renda Fixa
        </Text>
        <Summary />
        <Image mt={4} w="1090px" src={'./assets/grafico.svg'} />
      </Box>
    </Grid>
  );
}
