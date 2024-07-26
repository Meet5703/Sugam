import { Container, Heading, Icon, List, Text, Stack } from '@chakra-ui/react';
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
          children="SUGAM"
          fontFamily={'Asap'}
          fontWeight={'500'}
          letterSpacing={'2px'}
          color={'blue.500'}
        />
        <Stack
          spacing={[5, 5, 5, 20]}
          fontSize={20}
          textTransform={'uppercase'}
          direction={['column', 'column', 'column', 'row']}
        >
          <Link to={'/'}>
            <Text>Home</Text>
          </Link>
          <Link to={'/products'}>
            <Text>Products</Text>
          </Link>
          <Link to={'/about'}>
            <Text>About</Text>
          </Link>
          <Link to={'/contact'}>
            <Text>Contact</Text>
          </Link>
        </Stack>
        <Stack direction={'row'} gap={6} fontSize={28}>
          <Link to={'instagram.com'}>
            <Text borderRadius={'full'} p={2} backgroundColor={'blue.200'}>
              <CgInstagram />
            </Text>
          </Link>
          <Link to={'facebook.com'}>
            <Text borderRadius={'full'} p={2} backgroundColor={'blue.200'}>
              <CgFacebook />
            </Text>
          </Link>
        </Stack>
      </Stack>
      <Text
        mt={10}
        fontWeight={'600'}
        textAlign={'center'}
        children={'© 2022 SUGAM. All rights reserved'}
        color={'blue.500'}
        fontSize={14}
      />
    </Container>
  );
};

export default Footer;
