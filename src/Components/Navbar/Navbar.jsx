import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Input,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Style.css';
import { CgMenuRightAlt } from 'react-icons/cg';
const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Container
      bgColor={'white'}
      maxW={'100%'}
      w={'full'}
      position={'fixed'}
      top={0}
      zIndex={1000}
    >
      <Container
        bgColor={'white'}
        zIndex={1}
        maxW={'container.xl'}
        w={'full'}
        paddingY={4}
        display={['none', 'none', 'block', 'block', 'block']}
      >
        <HStack w={'full'} justifyContent={'space-between'}>
          <Heading
            children="SUGAM"
            fontFamily={'Asap'}
            fontWeight={'500'}
            letterSpacing={'2px'}
            color={'blue.500'}
          />
          <HStack spacing={4}>
            {navLinks.map(link => (
              <Link key={link.path} href={link.path}>
                <Button
                  color={location.pathname === link.path ? 'blue.500' : 'black'}
                  colorScheme="blue"
                  variant={'ghost'}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </HStack>
        </HStack>
      </Container>
      <Box backgroundColor={'white'} position={'fixed'} top={0} w={'full'}>
        <Container
          position={'fixed'}
          left={0}
          top={0}
          backgroundColor={'white'}
          boxSizing="border-box"
          m={0}
          overflowX={'hidden'}
          w={'full'}
          paddingY={4}
          display={['block', 'block', 'none', 'none', 'none']}
        >
          <HStack
            overflowX={'hidden'}
            w={'100vw'}
            justifyContent={'space-between'}
            pr={5}
          >
            <Heading
              float={'left'}
              children="SUGAM"
              fontFamily={'Asap'}
              fontWeight={'500'}
              letterSpacing={'2px'}
              color={'blue.500'}
            />
            <Box>
              <Button
                rounded={'full'}
                border={'solid 1px'}
                colorScheme="blue"
                variant={'ghost'}
                onClick={onOpen}
                ref={btnRef}
              >
                <CgMenuRightAlt />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay backdropFilter={'blur(10px)'} />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    {' '}
                    <Heading
                      float={'left'}
                      children="SUGAM"
                      fontFamily={'Jaro'}
                      fontWeight={'500'}
                      letterSpacing={'2px'}
                      color={'blue.500'}
                    />
                  </DrawerHeader>

                  <DrawerBody>
                    <VStack alignItems={'flex-start'} spacing={4}>
                      {navLinks.map(link => (
                        <Link key={link.path} href={link.path}>
                          <Button
                            color={
                              location.pathname === link.path
                                ? 'blue.500'
                                : 'black'
                            }
                            colorScheme="blue"
                            variant={'ghost'}
                          >
                            {link.name}
                          </Button>
                        </Link>
                      ))}
                    </VStack>
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Box>
          </HStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Navbar;
