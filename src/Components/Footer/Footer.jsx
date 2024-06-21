import {
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from 'react-icons/io';
import { RiInstagramFill, RiTwitterFill, RiTwitterLine } from 'react-icons/ri';
const Footer = () => {
  return (
    <Container maxW={'container.xl'} paddingX={0} mt={10}>
      <Stack
        direction={['column', 'column', 'column', 'row']}
        w={'full'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack
          direction={['column', 'column', 'column', 'row']}
          justifyContent={'space-between'}
          w={'full'}
        >
          <Heading
            children="SUGAM"
            fontFamily={'Asap'}
            fontWeight={'500'}
            letterSpacing={'2px'}
            color={'blue.400'}
          />
          <HStack maxW={'100px'} spacing={6}>
            <Link to={'/'}>
              <Text color={'blue.400'} colorScheme="blue" variant={'ghost'}>
                Home
              </Text>
            </Link>
            <Link to={'/products'}>
              {' '}
              <Text color={'blue.400'} colorScheme="blue" variant={'ghost'}>
                Products
              </Text>
            </Link>
            <Link to={'/about'}>
              {' '}
              <Text color={'blue.400'} colorScheme="blue" variant={'ghost'}>
                About
              </Text>
            </Link>
            <Link to={'/contact'}>
              {' '}
              <Text color={'blue.400'} colorScheme="blue" variant={'ghost'}>
                Contact
              </Text>
            </Link>
          </HStack>
          <HStack spacing={4}>
            <Link to={'https://www.facebook.com/sugam.io/'}>
              <Icon
                _hover={{
                  color: 'blue.500',
                }}
                boxSize={'30px'}
                as={IoLogoFacebook}
              />
            </Link>
            <Link to={'https://twitter.com/sugam_io'}>
              <Icon
                as={RiInstagramFill}
                boxSize={'30px'}
                _hover={{ color: 'blue.500' }}
              />
            </Link>
            <Link to={'https://twitter.com/sugam_io'}>
              <Icon
                as={RiTwitterFill}
                boxSize={'30px'}
                _hover={{ color: 'blue.500' }}
              />
            </Link>
          </HStack>
        </Stack>
        <Text opacity={'0.8'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          soluta at quod tempore esse enim.
        </Text>
        <Text opacity={'0.8'}>© 2021 Sugam. All rights reserved. </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
