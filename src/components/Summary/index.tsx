import { Box, Grid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';

// import Barra from './assets/barra.svg';

export function Summary() {
  const [data, setData] = useState({
    equity: 0,
    equityProfit: 0,
    valueApplied: 0,
    percentageProfit: 0,
    percentageOverIndexer: 0,
    indexerValue: 0
  });
  useEffect(() => {
    axios
      .get(
        'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'
      )
      .then(({ data }) => {
        const res = data.data.snapshotByPortfolio;
        setData(res);
      });
  }, []);
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={2}>
      <Box
        display="flex"
        alignItems="center"
        w="160px"
        h="60px"
        bg="#FFFFFF"
        borderRadius={10}
      >
        {/* <Image src={Barra} width="auto" height="auto" alt="image" /> */}
        <Box ml={2}>
          <Text fontSize="9px" color="#4E5B61" fontWeight="normal">
            RENTABILIDADE
          </Text>
          <Text fontSize="14px" fontWeight="bold" color="#4C309B">
            {new Intl.NumberFormat('pt-Br', {
              style: 'currency',
              currency: 'BRL'
            }).format(data.equity)}
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        w="160px"
        h="60px"
        bg="#FFFFFF"
        borderRadius={10}
      >
        {/* <Image ml={2} src={'./assets/barra.svg'} /> */}
        <Box ml={2}>
          <Text fontSize="9px" color="#4E5B61" fontWeight="normal">
            RENTABILIDADE
          </Text>
          <Text fontSize="14px" fontWeight="bold" color="#4C309B">
            {new Intl.NumberFormat('pt-Br', {
              style: 'currency',
              currency: 'BRL'
            }).format(data.valueApplied)}
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        w="160px"
        h="60px"
        bg="#FFFFFF"
        borderRadius={10}
      >
        {/* <Image ml={2} src={'./assets/barra.svg'} /> */}
        <Box ml={2}>
          <Text fontSize="9px" color="#4E5B61" fontWeight="normal">
            RENTABILIDADE
          </Text>
          <Text fontSize="14px" fontWeight="bold" color="#4C309B">
            {new Intl.NumberFormat('pt-Br', {
              style: 'currency',
              currency: 'BRL'
            }).format(data.equityProfit)}
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        w="160px"
        h="60px"
        bg="#FFFFFF"
        borderRadius={10}
      >
        {/* <Image ml={2} src={'./assets/barra.svg'} /> */}
        <Box ml={2}>
          <Text fontSize="9px" color="#4E5B61" fontWeight="normal">
            RENTABILIDADE
          </Text>
          <Text fontSize="14px" fontWeight="bold" color="#4C309B">
            {data.percentageProfit}%
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        w="160px"
        h="60px"
        bg="#FFFFFF"
        borderRadius={10}
      >
        {/* <Image ml={2} src={'./assets/barra.svg'} /> */}
        <Box ml={2}>
          <Text fontSize="9px" color="#4E5B61" fontWeight="normal">
            CDI
          </Text>
          <Text fontSize="14px" fontWeight="bold" color="#4C309B">
            {data.indexerValue}%
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        w="160px"
        h="60px"
        bg="#FFFFFF"
        borderRadius={10}
      >
        {/* <Image ml={2} src={'./assets/barra.svg'} /> */}
        <Box ml={2}>
          <Text fontSize="9px" color="#4E5B61" fontWeight="normal">
            % SOBRE CDI
          </Text>
          <Text fontSize="14px" fontWeight="bold" color="#4C309B">
            {data.percentageOverIndexer}%
          </Text>
        </Box>
      </Box>
    </Grid>
  );
}
