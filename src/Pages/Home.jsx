import React, { useEffect, useState } from 'react';
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
  Spinner,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../Components/Navbar/Navbar';
import '../Components/Navbar/Style.css';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Footer from '../Components/Footer/Footer';
import axios from 'axios';
import FeaturedCarousel from './featuredProducts';
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
  // const featuredProducts = [];
  // const exclusiveProducts = [];
  // const chunkArray = (array, size) => {
  //   const result = [];
  //   for (let i = 0; i < array.length; i += size) {
  //     result.push(array.slice(i, i + size));
  //   }
  //   return result;
  // };

  // const productChunks = chunkArray(exclusiveProducts, 4);
  // const chunkArray2 = (arr, size) => {
  //   return arr.reduce((chunks, item, i) => {
  //     if (i % size === 0) {
  //       chunks.push([item]);
  //     } else {
  //       chunks[chunks.length - 1].push(item);
  //     }
  //     return chunks;
  //   }, []);
  // };

  // // Divide the featuredProducts into chunks of 9 products (3x3 grid)
  // const productChunks2 = chunkArray2(featuredProducts, 9);

  const handleInquireNow = product => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <Container maxW={'100%'} paddingX={0} overflowX={'hidden'}>
      <Container
        mt={[20, 20, 0, 0, 0]}
        color={'rgb(246,246,246)'}
        maxW={'100%'}
        paddingX={0}
      >
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

      <ProductCarousel onInquireNow={handleInquireNow} />
      {selectedProduct && (
        <InquiryModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />
      )}

      <Container maxW="container.xl" mt={10}>
        <Grid
          templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
          gap={6}
          w="100%"
          maxW={['400px', '500px', '700px', '1000px', 'container.xl']}
          mx="auto"
          h={['90vh', '90vh', '90vh', '40vh', '40vh']}
        >
          <GridItem position="relative">
            <Box
              maxH={'100%'}
              maxW={'100%'}
              _hover={{ transform: 'scale(1.1)' }}
              bgRepeat="no-repeat"
              bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
              bgSize="cover"
              bgPosition="center"
              h="100%"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              role="group"
              transition="all 0.3s ease"
            ></Box>
            <Box
              position="absolute"
              transition="all 0.3s ease"
              top="50%"
              left="22.4%"
              transform="translate(-50%, -50%)"
              color="black"
              p={4}
              zIndex="1"
              textAlign="left"
            >
              <Heading as="h2" size="lg" color="blue.400">
                Oil Filters
              </Heading>
              <Text as="p" fontSize="lg" mb={4}>
                Sale 40% Off
              </Text>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => handleInquireNow({ title: 'Oil Filters' })}
              >
                Inquire Now
              </Button>
            </Box>
          </GridItem>

          <GridItem position="relative">
            <Box
              maxH={'100%'}
              maxW={'100%'}
              _hover={{ transform: 'scale(1.1)' }}
              bgRepeat="no-repeat"
              bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
              bgSize="cover"
              bgPosition="center"
              h="100%"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              role="group"
              transition="all 0.3s ease"
            ></Box>
            <Box
              position="absolute"
              transition="all 0.3s ease"
              top="50%"
              left="22.4%"
              transform="translate(-50%, -50%)"
              color="black"
              p={4}
              zIndex="1"
              textAlign="left"
            >
              <Heading as="h2" size="lg" color="blue.400">
                Oil Filters
              </Heading>
              <Text as="p" fontSize="lg" mb={4}>
                Sale 40% Off
              </Text>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => handleInquireNow({ title: 'Oil Filters' })}
              >
                Inquire Now
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      {/* <Heading
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
      /> */}
      <ExclusiveCarousel onInquireNow={handleInquireNow} />
      {selectedProduct && (
        <InquiryModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />
      )}
      <Grid
        mt={10}
        h={['90vh', '90vh', '100vh', '40vh']}
        w={'100%'}
        mx={'auto'}
        maxW={['400px', '500px', '700px', '1000px', 'container.xl']}
        templateColumns={['1fr', '1fr', '1fr', '1fr 1fr 1fr']}
        gap={6}
      >
        <GridItem position="relative">
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            bgRepeat={'no-repeat'}
            bgImage="url(https://bigon-7.myshopify.com/cdn/shop/files/banner-2-2_1024x1024.jpg?v=1643779637)"
            bgSize={['cover', 'cover', 'cover', 'contain']}
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
              top={['25%', '25%', '25%', '25%', '30%']}
              left={'0%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Text
                as="p"
                fontSize={['24px', '24px', '30px', '30px', '32px']}
                children="Super Sale"
              />
              <Heading
                as="h2"
                fontSize={['20px', '20px', '24px', '24px', '28px']}
                children="Car Wheel"
                mb={2}
              />
              <Button
                fontSize={['16px', '16px', '20px', '20px', '20px']}
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
            bgSize={['cover', 'cover', 'cover', 'contain']}
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
              top={['25%', '25%', '25%', '25%', '30%']}
              left={'0%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Text
                as="p"
                fontSize={['24px', '24px', '30px', '30px', '32px']}
                children="Super Sale"
              />
              <Heading
                as="h2"
                fontSize={['20px', '20px', '24px', '24px', '28px']}
                children="Car Wheel"
                mb={2}
              />
              <Button
                fontSize={['16px', '16px', '20px', '20px', '20px']}
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
            bgSize={['cover', 'cover', 'cover', 'contain']}
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
              top={['25%', '25%', '25%', '25%', '30%']}
              left={'0%'}
              color="black"
              p={4}
              zIndex="1"
            >
              <Text
                as="p"
                fontSize={['24px', '24px', '30px', '30px', '32px']}
                children="Super Sale"
              />
              <Heading
                as="h2"
                fontSize={['20px', '20px', '24px', '24px', '28px']}
                children="Car Wheel"
                mb={2}
              />
              <Button
                fontSize={['16px', '16px', '20px', '20px', '20px']}
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
      <FeaturedCarousel />
    </Container>
  );
};

export default Home;
const ProductCarousel = ({ onInquireNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await axios.get(
          'https://sugamexpress.onrender.com/api/v1/products/latest'
        );
        console.log('Latest Products Response:', response.data);
        setLatestProducts(response.data.data); // Set data array from response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching latest products:', error);
        setError(error); // Set error state on fetch error
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const productChunks = chunkArray(latestProducts, 4);

  if (loading) {
    return (
      <Container maxW="container.xl" mx="auto" mt={16} textAlign="center">
        <Spinner size="xl" color="blue.400" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl" mx="auto" mt={16} textAlign="center">
        <Text color="red.500">
          Error fetching latest products. Please try again later.
        </Text>
      </Container>
    );
  }

  // Check if latestProducts is not an array
  if (!Array.isArray(latestProducts)) {
    console.error('Latest products is not an array:', latestProducts);
    return null; // or handle the error state appropriately
  }

  return (
    <Container maxW="container.xl" mx="auto" mt={16}>
      <Heading
        children="Latest Products"
        mb={12}
        color="blue.400"
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
        swipeable={false}
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
              &lt;
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
              &gt;
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
              'repeat(2, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={[6, 6, 6, 6]}
            padding={4}
          >
            {chunk.map(product => (
              <GridItem
                key={product._id}
                w="100%"
                onMouseEnter={() => setHoveredProductId(product._id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <Box
                  position="relative"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  height={['200px', '200px', '250px', '250px']}
                  transition="all 0.3s ease"
                >
                  <Box
                    backgroundImage={`url(${`https://sugamexpress.onrender.com/public/photos/${product.photo
                      .split('\\')
                      .pop()
                      .split('/')
                      .pop()}`})`}
                    bgRepeat={'no-repeat'}
                    backgroundSize={['contain', 'contain', 'contain', 'cover']}
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
                    display={hoveredProductId === product._id ? 'flex' : 'none'}
                    alignItems="center"
                    justifyContent="center"
                    transition="opacity 0.5s ease"
                    opacity={hoveredProductId === product._id ? 1 : 0}
                  >
                    <Button
                      variant={'solid'}
                      colorScheme="blue"
                      onClick={() => onInquireNow(product)}
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
  );
};
const ExclusiveCarousel = ({ onInquireNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [exclusiveProducts, setExclusiveProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExclusiveProducts = async () => {
      try {
        const response = await axios.get(
          'https://sugamexpress.onrender.com/api/v1/products/exclusive'
        );
        console.log('Exclusive Products Response:', response.data);
        setExclusiveProducts(response.data.data); // Set data array from response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exclusive products:', error);
        setError(error); // Set error state on fetch error
        setLoading(false);
      }
    };

    fetchExclusiveProducts();
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const productChunks = chunkArray(exclusiveProducts, 4);

  if (loading) {
    return (
      <Container maxW="container.xl" mx="auto" mt={16} textAlign="center">
        <Spinner size="xl" color="blue.400" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl" mx="auto" mt={16} textAlign="center">
        <Text color="red.500">
          Error fetching exclusive products. Please try again later.
        </Text>
      </Container>
    );
  }

  // Check if exclusiveProducts is not an array
  if (!Array.isArray(exclusiveProducts)) {
    console.error('Exclusive products is not an array:', exclusiveProducts);
    return null; // or handle the error state appropriately
  }

  return (
    <Container maxW="container.xl" mx="auto" mt={16}>
      <Heading
        children="Exclusive Products"
        mb={12}
        color="blue.400"
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
        swipeable={false}
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
              &lt;
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
              &gt;
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
              'repeat(2, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={[6, 6, 6, 6]}
            padding={4}
          >
            {chunk.map(product => (
              <GridItem
                key={product._id}
                w="100%"
                onMouseEnter={() => setHoveredProductId(product._id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <Box
                  position="relative"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  height={['200px', '200px', '250px', '250px']}
                  transition="all 0.3s ease"
                >
                  <Box
                    backgroundImage={`url(${`https://sugamexpress.onrender.com/public/photos/${product.photo
                      .split('\\')
                      .pop()
                      .split('/')
                      .pop()}`})`}
                    bgRepeat={'no-repeat'}
                    backgroundSize={['contain', 'contain', 'contain', 'cover']}
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
                    display={hoveredProductId === product._id ? 'flex' : 'none'}
                    alignItems="center"
                    justifyContent="center"
                    transition="opacity 0.5s ease"
                    opacity={hoveredProductId === product._id ? 1 : 0}
                  >
                    <Button
                      variant={'solid'}
                      colorScheme="blue"
                      onClick={() => onInquireNow(product)}
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
  );
};
