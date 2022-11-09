import { Grid, Box, Text, Image } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Options } from '../Options';
import { Summary } from '../Summary';

export function Dashboard() {
  return (
    <Grid
      display="grid"
      gridTemplateColumns="repeat(2, 2fr)"
      h="100%"
      bg="gray.800"
    >
      <Box h="100%" w="220px" gridColumn="1" bg="gray.900">
        <Options />
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
