import { Box, Text, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      margin={0}
      border={0}
      padding={0}
      height={'90px'}
      width={'100vw'}
      bg="#FFFFFF"
      borderBottom="1px solid gray"
    >
      <Box ml={6} cursor="pointer">
        <Image src={'./assets/logo.svg'} />
      </Box>
      <Box w={784} display="flex" justifyContent="space-between" mr={12}>
        <Box mr={6} display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            w="30px"
            h="30px"
            bg="#DAE0E3"
          >
            <Image src={'./assets/saldo.svg'} />
          </Box>

          <Box color="#707B81" ml={2} h="30px">
            <Text fontSize="8px">SALDO BRUTO</Text>
            <Text mt={-1} fontSize="16px" fontWeight="bold">
              130.521.230,02
            </Text>
          </Box>
        </Box>
        <Box mr={6} display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            w="30px"
            h="30px"
            bg="#DAE0E3"
          >
            <Image src={'./assets/arrowUp.svg'} />
          </Box>

          <Box color="#707B81" ml={2} h="30px">
            <Text fontSize="8px">VALOR APLICADO</Text>
            <Text mt={-1} fontSize="16px" fontWeight="bold">
              521.230,02
            </Text>
          </Box>
        </Box>
        <Box mr={6} display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            w="30px"
            h="30px"
            bg="#DAE0E3"
          >
            <Image src={'./assets/rentabilidade.svg'} />
          </Box>

          <Box color="#707B81" ml={2} h="30px">
            <Text fontSize="8px">RENTABILIDADE</Text>
            <Text mt={-1} fontSize="16px" fontWeight="bold">
              2,34%
            </Text>
          </Box>
        </Box>
        <Box mr={6} display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
            w="30px"
            h="30px"
            bg="#5D41AC"
            cursor="pointer"
          >
            <Image mt={-1} src={'./assets/chevronDown.svg'} />
          </Box>

          <Box color="#707B81" ml={2} h="30px">
            <Text fontWeight="medium" fontSize="8px">
              CARTEIRA
            </Text>
            <Text mt={-1} fontSize="16px" fontWeight="bold">
              Minha Carteira
            </Text>
          </Box>
        </Box>
        <Box
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={50}
          w="30px"
          h="30px"
          bg="#5D41AC"
        >
          <Image
            src={'./assets/hamburguer.svg'}
            fontSize="14px"
            color="white"
          />
        </Box>
      </Box>
    </Box>
  );
}
