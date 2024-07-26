import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';
import { CgInstagram, CgFacebook } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container
      maxW={'100vw'}
      backgroundColor={'blue.100'}
      pt={20}
      pb={4}
      px={[3, 3, 3, 28]}
    >
      <Stack
        flexDir={['column', 'column', 'column', 'row']}
        justifyContent={'space-between'}
        alignItems={'start'}
        gap={10}
      >
        <Heading
          fontFamily={'Asap'}
          fontWeight={'500'}
          letterSpacing={'2px'}
          color={'blue.500'}
        >
          SUGAM
        </Heading>
        <Stack
          spacing={[5, 5, 5, 20]}
          fontSize={20}
          textTransform={'uppercase'}
          direction={['column', 'column', 'column', 'row']}
        >
          <ChakraLink as={Link} to={'/'}>
            <Text _hover={{ color: 'blue.600', textDecoration: 'underline' }}>
              Home
            </Text>
          </ChakraLink>
          <ChakraLink as={Link} to={'/products'}>
            <Text _hover={{ color: 'blue.600', textDecoration: 'underline' }}>
              Products
            </Text>
          </ChakraLink>
          <ChakraLink as={Link} to={'/about'}>
            <Text _hover={{ color: 'blue.600', textDecoration: 'underline' }}>
              About
            </Text>
          </ChakraLink>
          <ChakraLink as={Link} to={'/contact'}>
            <Text _hover={{ color: 'blue.600', textDecoration: 'underline' }}>
              Contact
            </Text>
          </ChakraLink>
        </Stack>
        <Stack direction={'row'} gap={6} fontSize={28}>
          <Box
            as={Link}
            to={'https://instagram.com'}
            _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
          >
            <Text borderRadius={'full'} p={2} backgroundColor={'blue.200'}>
              <CgInstagram />
            </Text>
          </Box>
          <Box
            as={Link}
            to={'https://facebook.com'}
            _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
          >
            <Text borderRadius={'full'} p={2} backgroundColor={'blue.200'}>
              <CgFacebook />
            </Text>
          </Box>
        </Stack>
      </Stack>
      <Text
        mt={10}
        fontWeight={'600'}
        textAlign={'center'}
        color={'blue.500'}
        fontSize={14}
      >
        © 2022 SUGAM. All rights reserved
      </Text>
    </Container>
  );
};

export default Footer;
