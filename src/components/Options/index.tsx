import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Text,
  Button
} from '@chakra-ui/react';

export function Options() {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton h="67px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="33px"
            borderRadius={50}
            bg="#707B81"
            _hover={{ bg: '#4C309B' }}
          >
            <Image src="./assets/resumeChart.svg" />
          </Box>
          <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Text color="#707B81" ml={4} fontSize="13px" textAlign="left">
              Resumo
              <br />
              Da Carteira
            </Text>
            <AccordionIcon color="#707B81" />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4}>Content</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton h="67px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="33px"
            borderRadius={50}
            bg="#707B81"
            _hover={{ bg: '#4C309B' }}
          >
            <Image src="./assets/resumeChart.svg" />
          </Box>
          <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Text color="#707B81" ml={4} fontSize="13px" textAlign="left">
              Resumo
              <br />
              Da Carteira
            </Text>
            <AccordionIcon color="#707B81" />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4}>Content</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton h="67px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="33px"
            borderRadius={50}
            bg="#707B81"
            _hover={{ bg: '#4C309B' }}
          >
            <Image src="./assets/resumeChart.svg" />
          </Box>
          <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Text color="#707B81" ml={4} fontSize="13px" textAlign="left">
              Resumo
              <br />
              Da Carteira
            </Text>
            <AccordionIcon color="#707B81" />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4}>Content</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton h="67px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="33px"
            borderRadius={50}
            bg="#707B81"
            _hover={{ bg: '#4C309B' }}
          >
            <Image src="./assets/resumeChart.svg" />
          </Box>
          <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Text color="#707B81" ml={4} fontSize="13px" textAlign="left">
              Resumo
              <br />
              Da Carteira
            </Text>
            <AccordionIcon color="#707B81" />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4}>Content</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton h="67px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="33px"
            borderRadius={50}
            bg="#707B81"
            _hover={{ bg: '#4C309B' }}
          >
            <Image src="./assets/resumeChart.svg" />
          </Box>
          <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Text color="#707B81" ml={4} fontSize="13px" textAlign="left">
              Resumo
              <br />
              Da Carteira
            </Text>
            <AccordionIcon color="#707B81" />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4}>Content</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton h="67px">
        
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="33px"
            borderRadius={50}
            bg="#707B81"
            _hover={{ bg: '#4C309B' }}
            _active={{ bg: '#4C309B' }}
          >
            <Image src="./assets/resumeChart.svg" />
          </Button>
          <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Text color="#707B81" ml={4} fontSize="13px" textAlign="left">
              Resumo
              <br />
              Da Carteira
            </Text>
            <AccordionIcon color="#707B81" />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4}>Content</AccordionPanel>
      </AccordionItem>
      
    </Accordion>
  );
}
