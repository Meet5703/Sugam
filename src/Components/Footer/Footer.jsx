import {
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from 'react-icons/io';
import { RiInstagramFill, RiTwitterFill, RiTwitterLine } from 'react-icons/ri';
const Footer = () => {
  return (
    <Container maxW={'container.xl'} paddingX={0} mt={28}>
      <VStack w={'full'} justifyContent={'space-between'} alignItems={'center'}>
        <HStack justifyContent={'space-between'} w={'full'}>
          <Heading
            children="SUGAM"
            fontFamily={'Asap'}
            fontWeight={'500'}
            letterSpacing={'2px'}
            color={'blue.400'}
          />
          <HStack>
            <Link to={'/'}>
              <Button colorScheme="blue" variant={'ghost'}>
                Home
              </Button>
            </Link>
            <Link to={'/products'}>
              {' '}
              <Button colorScheme="blue" variant={'ghost'}>
                Products
              </Button>
            </Link>
            <Link to={'/about'}>
              {' '}
              <Button colorScheme="blue" variant={'ghost'}>
                About
              </Button>
            </Link>
            <Link to={'/contact'}>
              {' '}
              <Button colorScheme="blue" variant={'ghost'}>
                Contact
              </Button>
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
        </HStack>
        <Text opacity={'0.8'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          soluta at quod tempore esse enim.
        </Text>
        <Text opacity={'0.8'}>© 2021 Sugam. All rights reserved. </Text>
      </VStack>
    </Container>
  );
};

export default Footer;
