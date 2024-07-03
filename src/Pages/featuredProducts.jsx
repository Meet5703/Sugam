import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

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

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get(
          'https://sugamexpress.onrender.com/api/v1/products/featured'
        );
        setFeaturedProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <Box
        minH="100vh"
        maxW="container.xl"
        mx="auto"
        mt={16}
        textAlign="center"
      >
        <Spinner size="xl" color="blue.400" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        minH="100vh"
        maxW="container.xl"
        mx="auto"
        mt={16}
        textAlign="center"
      >
        <Text color="red.500">
          Error fetching featured products. Please try again later.
        </Text>
      </Box>
    );
  }

  const productChunks2 = chunkArray2(featuredProducts, 9);

  return (
    <Box minH="100vh" maxW="container.xl" mx="auto" mt={16} position="relative">
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
        swipeable
        emulateTouch
        onChange={index => setCurrentSlide(index)}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <Button
              onClick={onClickHandler}
              position="absolute"
              top="6%"
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
              py={'12'}
              px={'4'}
            >
              {chunk.map(product => (
                <GridItem
                  key={product._id}
                  w="100%"
                  h={'120px'}
                  onMouseEnter={() => setHoveredProductId(product._id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <HStack
                    boxShadow={'0 0 10px 2px rgba(0,0,0,0.2)'}
                    rounded={'md'}
                    h={'100%'}
                  >
                    <Link to={`/products/${product._id}`}>
                      <Image
                        src={`https://sugamexpress.onrender.com/public/photos/${product.photo
                          .split('\\')
                          .pop()
                          .split('/')
                          .pop()}`}
                        alt={product.title}
                        w="100px"
                        h="100px"
                      />
                    </Link>
                    <VStack
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                    >
                      <Heading fontSize="xl" textAlign={'left'}>
                        {product.title}
                      </Heading>
                    </VStack>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FeaturedCarousel;
