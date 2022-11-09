import { Box, Image, HStack } from '@chakra-ui/react';
import Infos from '../NavOptions';

export function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      margin="auto"
      maxW={1366}
      height={90}
      padding="30px 40px"
      width="100%"
      bg="gray.600"
      borderBottom="1px solid gray.900"
    >
      <Box as="a" cursor="pointer">
        <Image src={'./assets/logoBorda.svg'} alt="logo" />
      </Box>
      <HStack w="70%" gap={5} justifyContent="flex-end">
        <Infos color="Gray" title="saldo bruto" value="130.521.230,02">
          <Image src={'./assets/saldo.svg'} alt="saldo" h="15px" />
        </Infos>
        <Infos color="Gray" title="Valor aplicado" value="521.230,02">
          <Image src={'./assets/arrowup.svg'} alt="arrowup" h="15px" />
        </Infos>
        <Infos color="Gray" title="Rentabiliade" value="2,34%">
          <Image src={'./assets/rentabilidade.svg'} alt="arrowDown" h="15px" />
        </Infos>
        <Infos color="Grape" title="Carteira" value="Minha Carteira">
          <Image src={'./assets/chevronDown.svg'} alt="arrowDown" h="15px" />
        </Infos>
        <Box
          as="button"
          borderRadius={50}
          h={30}
          w={30}
          bg="#5D41AC"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={'./assets/hamburguer.svg'} alt="hamburguer" h="12px" />
        </Box>
      </HStack>
    </Box>
  );
}
