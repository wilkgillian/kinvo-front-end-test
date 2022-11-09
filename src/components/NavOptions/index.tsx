import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface InfosProps {
  color: 'Gray' | 'Grape';
  children: ReactNode;
  title: string;
  value: string;
}

export default function Infos({
  children,
  title,
  value,
  color = 'Gray'
}: InfosProps) {
  return (
    <Box h="100%" w={154} display="flex" alignItems="center">
      <Box
        w={30}
        h={30}
        bg={color === 'Gray' ? '#707B81' : '#5D41AC'}
        borderRadius={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={2}
      >
        {children}
      </Box>
      <Box>
        <Text fontWeight="thin" fontSize={8} textTransform="uppercase">
          {title}
        </Text>
        <Text fontWeight="bold" fontSize={16}>
          {value}
        </Text>
      </Box>
    </Box>
  );
}
