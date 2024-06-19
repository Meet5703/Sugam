import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  Grid,
  GridItem,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Image,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../Components/Navbar/Navbar';
import '../Components/Navbar/Style.css';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Footer from '../Components/Footer/Footer';
const InquiryModal = ({ isOpen, onClose, product }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Inquiry about {product?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormLabel>Product name</FormLabel>
            <Input value={product?.title} isReadOnly />
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your name" type="text" />
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your email" />
            <FormLabel>Number</FormLabel>
            <Input placeholder="Your Number" type="number" />
            <FormLabel>Message</FormLabel>
            <Input placeholder="Your message" />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Send Inquiry
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const carouselItems = [
    {
      bgImage:
        'url(//bigon-7.myshopify.com/cdn/shop/files/slider-1-1.jpg?v=1643197493)',
      heading: 'Winter Sale For Auto Parts',
      subheading: 'Get up to 50% off Today Only!',
      link: '/products',
      buttonText: 'Inquiry Now',
    },
    {
      bgImage:
        'url(https://bigon-7.myshopify.com/cdn/shop/files/slider-1-2_0d7abea0-79ef-425d-8940-ab3a2f483b1e.jpg?v=1643198892)',
      heading: 'Latest & Powerful Engine For You',
      subheading: '50% off on all Summer Sale Products',
      link: '/products',
      buttonText: 'Shop Now',
    },
  ];

  const exclusiveProducts = [
    {
      id: 1,
      price: 500,
      title: 'Product 1',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_1',
      link: '/product/1',
    },
    {
      id: 2,
      price: 500,
      title: 'Product 2',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_2',
      link: '/product/2',
    },
    {
      id: 3,
      price: 500,
      title: 'Product 3',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_3',
      link: '/product/3',
    },
    {
      id: 4,
      price: 500,
      title: 'Product 4',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_4',
      link: '/product/4',
    },
    {
      id: 5,
      price: 500,
      title: 'Product 5',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_5',
      link: '/product/5',
    },
    {
      id: 6,
      price: 500,
      title: 'Product 6',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_6',
      link: '/product/6',
    },
    {
      id: 7,
      price: 500,
      title: 'Product 7',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_7',
      link: '/product/7',
    },
    {
      id: 8,
      price: 500,
      title: 'Product 8',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.jpg?v=1643284159_8',
      link: '/product/8',
    },
  ];
  const featuredProducts = [
    {
      id: 1,
      price: 500,
      title: 'Product 1',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/1',
    },
    {
      id: 2,
      price: 500,
      title: 'Product 2',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/2',
    },
    {
      id: 3,
      price: 500,
      title: 'Product 3',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/3',
    },
    {
      id: 4,
      price: 500,
      title: 'Product 4',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/4',
    },
    {
      id: 5,
      price: 500,
      title: 'Product 5',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/5',
    },
    {
      id: 6,
      price: 500,
      title: 'Product 6',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/6',
    },
    {
      id: 7,
      price: 500,
      title: 'Product 7',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/7',
    },
    {
      id: 8,
      price: 500,
      title: 'Product 8',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/8',
    },
    {
      id: 1,
      price: 500,
      title: 'Product 1',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/1',
    },
    {
      id: 2,
      price: 500,
      title: 'Product 2',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/2',
    },
    {
      id: 3,
      price: 500,
      title: 'Product 3',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/3',
    },
    {
      id: 4,
      price: 500,
      title: 'Product 4',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/4',
    },
    {
      id: 5,
      price: 500,
      title: 'Product 5',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/5',
    },
    {
      id: 6,
      price: 500,
      title: 'Product 6',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/6',
    },
    {
      id: 7,
      price: 500,
      title: 'Product 7',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/7',
    },
    {
      id: 8,
      price: 500,
      title: 'Product 8',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/8',
    },
    {
      id: 1,
      price: 500,
      title: 'Product 1',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/1',
    },
    {
      id: 2,
      price: 500,
      title: 'Product 2',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/2',
    },
    {
      id: 3,
      price: 500,
      title: 'Product 3',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/3',
    },
    {
      id: 4,
      price: 500,
      title: 'Product 4',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/4',
    },
    {
      id: 5,
      price: 500,
      title: 'Product 5',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/5',
    },
    {
      id: 6,
      price: 500,
      title: 'Product 6',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/6',
    },
    {
      id: 7,
      price: 500,
      title: 'Product 7',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/7',
    },
    {
      id: 8,
      price: 500,
      title: 'Product 8',
      image:
        'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_fda8d04c-c763-4ac9-87b7-6f12120372c0_95X106_crop_center.jpg?v=1643285091',
      link: '/product/8',
    },
  ];

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const productChunks = chunkArray(exclusiveProducts, 4);
  const chunkArray2 = (arr, size) => {
    return arr.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  // Divide the featuredProducts into chunks of 9 products (3x3 grid)
  const productChunks2 = chunkArray2(featuredProducts, 9);

  const handleInquireNow = product => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <Container maxW={'100%'} paddingX={0} overflowX={'hidden'}>
      <Container mt={20} color={'rgb(246,246,246)'} maxW={'100%'} paddingX={0}>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          emulateTouch
          onChange={index => setCurrentSlide(index)}
        >
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              overflowX="hidden"
              h={['55vh', '55vh', '100vh', '100vh']}
              backgroundImage={item.bgImage}
              backgroundSize={'cover'}
              backgroundPosition="center"
              position="relative"
            >
              <Container
                maxW={['170px', '170px', '300px', '500px', '500px']}
                paddingX={4}
                color={'black'}
                position={'absolute'}
                top={['15%', '15%', '33%', '33%', '33%']}
                left={['1%', '1%', '2%', '2%', '10%']}
                textAlign={'left'}
                className={index === currentSlide ? 'animate-slide' : ''}
              >
                <Text
                  py={1}
                  fontSize={['lg', 'lg', '2xl', '2xl', '3xl']}
                  fontFamily={'Oswald'}
                  color={'blue.400'}
                  children={item.subheading}
                  className={index === currentSlide ? 'slideInLeft' : ''}
                />
                <Heading
                  py={1}
                  fontWeight={'600'}
                  fontSize={['2xl', '2xl', '5xl', '5xl', '6xl']}
                  fontFamily={'Oswald'}
                  children={item.heading}
                  className={index === currentSlide ? 'slideInRight' : ''}
                />
                <Link to={item.link}>
                  <Button
                    mt={'15px'}
                    ml={'4'}
                    variant={'outline'}
                    colorScheme="blue"
                  >
                    {item.buttonText}
                  </Button>
                </Link>
              </Container>
            </Box>
          ))}
        </Carousel>
      </Container>
      <Container maxW="container.xl" paddingX={0} mt={10}>
        <HStack justifyContent="space-between" mb={4}>
          <Heading
            fontFamily={'Fira Sans Condensed'}
            fontWeight={'600'}
            color={'blue.400'}
            fontSize={['2xl', '2xl', '3xl', '3xl', '4xl']}
          >
            Exclusive Products
          </Heading>

          <Link to="/products">
            <Button colorScheme="blue">View All</Button>
          </Link>
        </HStack>
        <Carousel
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          emulateTouch
          onChange={index => setCurrentSlide(index)}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Button
                onClick={onClickHandler}
                position="absolute"
                top="50%"
                left="0"
                transform="translateY(-50%)"
                zIndex="2"
                bg="blue.400"
                color="white"
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
                aria-label={label}
              >
                <RiArrowLeftSLine />
              </Button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <Button
                onClick={onClickHandler}
                position="absolute"
                top="50%"
                right="0"
                transform="translateY(-50%)"
                zIndex="2"
                bg="blue.400"
                color="white"
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
                aria-label={label}
              >
                <RiArrowRightSLine />
              </Button>
            )
          }
        >
          {productChunks.map((chunk, index) => (
            <Grid
              key={index}
              templateColumns={[
                'repeat(2, 1fr)',
                'repeat(2, 1fr)',
                'repeat(4, 1fr)',
              ]}
              gap={6}
              padding={4}
            >
              {chunk.map(product => (
                <GridItem
                  key={product.id}
                  w="100%"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <Box
                    position="relative"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    height="250px"
                    transition="all 0.3s ease"
                  >
                    <Box
                      backgroundImage={`url(${product.image})`}
                      backgroundSize="cover"
                      backgroundPosition="center"
                      height="100%"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      backgroundColor="rgba(0, 0, 0, 0.5)"
                      display={
                        hoveredProductId === product.id ? 'flex' : 'none'
                      }
                      alignItems="center"
                      justifyContent="center"
                      transition="opacity 0.5s ease"
                      opacity={hoveredProductId === product.id ? 1 : 0}
                    >
                      <Button
                        variant={'solid'}
                        colorScheme="blue"
                        onClick={() => handleInquireNow(product)}
                      >
                        Inquire Now
                      </Button>
                    </Box>
                  </Box>
                  <VStack mt={2}>
                    <Heading fontSize="2xl" color="gray.500">
                      {product.title}
                    </Heading>
                    <Text fontSize="xl" color="blue.400">
                      ${product.price}
                    </Text>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Container>
      {selectedProduct && (
        <InquiryModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />
      )}
      <Grid
        mt={10}
        h={'40vh'}
        w={'100%'}
        mx={'auto'}
        maxW={'container.xl'}
        templateColumns={['1fr', '1fr', '1fr 1fr']}
      >
        <GridItem position="relative">
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            bgRepeat={'no-repeat'}
            bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
            bgSize="contain"
            bgPosition="center"
            h="100%"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            role="group"
            transition={'all 0.3s ease'}
          >
            <Box
              position="absolute"
              transition={'all 0.3s ease'}
              _groupHover={{ transform: 'scale(0.9)' }}
              top={'25%'}
              left={'10%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Heading
                as="h2"
                size="xl"
                children="Oil Filters"
                color={'blue.400'}
              />
              <Text as="p" fontSize={'xl'} children="Sale 40% Off" mb={4} />
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => handleInquireNow({ title: 'Oil Filters' })}
              >
                Inquire Now
              </Button>
            </Box>
          </Box>
        </GridItem>

        <GridItem position="relative">
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            bgRepeat={'no-repeat'}
            bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
            bgSize="contain"
            bgPosition="center"
            h="100%"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            role="group"
            transition={'all 0.3s ease'}
          >
            <Box
              position="absolute"
              transition={'all 0.3s ease'}
              _groupHover={{ transform: 'scale(0.9)' }}
              top={'25%'}
              left={'10%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Heading
                as="h2"
                size="xl"
                children="Oil Filters"
                color={'blue.400'}
              />
              <Text as="p" fontSize={'xl'} children="Sale 40% Off" mb={4} />
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => handleInquireNow({ title: 'Oil Filters' })}
              >
                Inquire Now
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Container maxW="container.xl" paddingX={0} mt={14}>
        <HStack justifyContent="space-between" mb={4}>
          <Heading
            fontFamily={'Fira Sans Condensed'}
            fontWeight={'600'}
            color={'blue.400'}
            fontSize={['2xl', '2xl', '3xl', '3xl', '4xl']}
          >
            Exclusive Products
          </Heading>

          <Link to="/products">
            <Button colorScheme="blue">View All</Button>
          </Link>
        </HStack>
        <Carousel
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          emulateTouch
          onChange={index => setCurrentSlide(index)}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Button
                onClick={onClickHandler}
                position="absolute"
                top="50%"
                left="0"
                transform="translateY(-50%)"
                zIndex="2"
                bg="blue.400"
                color="white"
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
                aria-label={label}
              >
                <RiArrowLeftSLine />
              </Button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <Button
                onClick={onClickHandler}
                position="absolute"
                top="50%"
                right="0"
                transform="translateY(-50%)"
                zIndex="2"
                bg="blue.400"
                color="white"
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
                aria-label={label}
              >
                <RiArrowRightSLine />
              </Button>
            )
          }
        >
          {productChunks.map((chunk, index) => (
            <Grid
              key={index}
              templateColumns={[
                'repeat(2, 1fr)',
                'repeat(2, 1fr)',
                'repeat(4, 1fr)',
              ]}
              gap={6}
              padding={4}
            >
              {chunk.map(product => (
                <GridItem
                  key={product.id}
                  w="100%"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <Box
                    position="relative"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    height="250px"
                    transition="all 0.3s ease"
                  >
                    <Box
                      backgroundImage={`url(${product.image})`}
                      backgroundSize="cover"
                      backgroundPosition="center"
                      height="100%"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      backgroundColor="rgba(0, 0, 0, 0.5)"
                      display={
                        hoveredProductId === product.id ? 'flex' : 'none'
                      }
                      alignItems="center"
                      justifyContent="center"
                      transition="opacity 0.5s ease"
                      opacity={hoveredProductId === product.id ? 1 : 0}
                    >
                      <Button
                        variant={'solid'}
                        colorScheme="blue"
                        onClick={() => handleInquireNow(product)}
                      >
                        Inquire Now
                      </Button>
                    </Box>
                  </Box>
                  <VStack mt={2}>
                    <Heading fontSize="2xl" color="gray.500">
                      {product.title}
                    </Heading>
                    <Text fontSize="xl" color="blue.400">
                      ${product.price}
                    </Text>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Container>
      {selectedProduct && (
        <InquiryModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />
      )}
      <Grid
        mt={10}
        h={'40vh'}
        w={'100%'}
        mx={'auto'}
        maxW={'container.xl'}
        templateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
        gap={6}
      >
        <GridItem position="relative">
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            bgRepeat={'no-repeat'}
            bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
            bgSize="contain"
            bgPosition="center"
            h="100%"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            role="group"
            transition={'all 0.3s ease'}
          >
            <Box
              position="absolute"
              transition={'all 0.3s ease'}
              _groupHover={{ transform: 'scale(0.9)' }}
              top={'25%'}
              left={'0%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Text as="p" fontSize={'lg'} children="Super Sale" />
              <Heading as="h2" size="lg" children="Car Wheel" mb={2} />
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => handleInquireNow({ title: 'Oil Filters' })}
              >
                Inquire Now
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem position="relative">
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            bgRepeat={'no-repeat'}
            bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
            bgSize="contain"
            bgPosition="center"
            h="100%"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            role="group"
            transition={'all 0.3s ease'}
          >
            <Box
              position="absolute"
              transition={'all 0.3s ease'}
              _groupHover={{ transform: 'scale(0.9)' }}
              top={'25%'}
              left={'0%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Text as="p" fontSize={'lg'} children="Super Sale" />
              <Heading as="h2" size="lg" children="Car Wheel" mb={2} />
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => handleInquireNow({ title: 'Oil Filters' })}
              >
                Inquire Now
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem position="relative">
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            bgRepeat={'no-repeat'}
            bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
            bgSize="contain"
            bgPosition="center"
            h="100%"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            role="group"
            transition={'all 0.3s ease'}
          >
            <Box
              position="absolute"
              transition={'all 0.3s ease'}
              _groupHover={{ transform: 'scale(0.9)' }}
              top={'25%'}
              left={'0%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Text as="p" fontSize={'lg'} children="Super Sale" />
              <Heading as="h2" size="lg" children="Car Wheel" mb={2} />
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => handleInquireNow({ title: 'Oil Filters' })}
              >
                Inquire Now
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Box
        minH={'90vh'}
        maxW="container.xl"
        mx="auto"
        mt={16}
        position="relative"
      >
        <Heading
          children="Featured Products"
          mb={12}
          color="blue.400"
          position="absolute"
          top="0%"
          zIndex="1"
          textAlign="left"
          fontFamily="Oswald"
          fontSize="4xl"
          fontWeight={500}
        />
        <Carousel
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          emulateTouch
          onChange={index => setCurrentSlide(index)}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Button
                onClick={onClickHandler}
                position="absolute"
                top="6%"
                right="14"
                transform="translateY(-50%)"
                zIndex="2"
                bg="blue.400"
                color="white"
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
                aria-label={label}
              >
                <RiArrowLeftSLine />
              </Button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <Button
                onClick={onClickHandler}
                position="absolute"
                top="6%"
                right="0"
                transform="translateY(-50%)"
                zIndex="2"
                bg="blue.400"
                color="white"
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
                aria-label={label}
              >
                <RiArrowRightSLine />
              </Button>
            )
          }
        >
          {productChunks2.map((chunk, index) => (
            <Box key={index} position={'relative'} top={'10'}>
              <Grid
                templateRows={['repeat(3, 1fr)']}
                templateColumns={['1fr', 'repeat(3, 1fr)']}
                gap={6}
                padding={4}
              >
                {chunk.map(product => (
                  <GridItem
                    key={product.id}
                    w="100%"
                    onMouseEnter={() => setHoveredProductId(product.id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                  >
                    <HStack
                      boxShadow={'0 0 10px 2px rgba(0,0,0,0.2)'}
                      rounded={'md'}
                    >
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image}
                          alt={product.title}
                          w="150px"
                          h="150px"
                        />
                      </Link>
                      <VStack
                        justifyContent={'flex-start'}
                        alignItems={'flex-start'}
                      >
                        <Heading fontSize="xl" textAlign={'left'}>
                          {product.title}
                        </Heading>
                        <Text
                          fontSize="xl"
                          color={'blue.400'}
                          textAlign={'left'}
                        >
                          ${product.price}
                        </Text>
                      </VStack>
                    </HStack>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Home;

const gridItemCard = ({ product, setHoveredProductId }) => (
  <GridItem
    key={product.id}
    w="100%"
    onMouseEnter={() => setHoveredProductId(product.id)}
    onMouseLeave={() => setHoveredProductId(null)}
  >
    <HStack>
      <Link href={`/products/${product.id}`}>
        <Image src={product.image} alt={product.title} w="200px" h="200px" />
      </Link>
      <VStack>
        <Heading fontSize="2xl" color="gray.500">
          {product.title}
        </Heading>
        <Text fontSize="xl" color="blue.400">
          ${product.price}
        </Text>
      </VStack>
    </HStack>
  </GridItem>
);
