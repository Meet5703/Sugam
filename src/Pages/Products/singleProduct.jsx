import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useParams } from 'react-router-dom'; // Import useParams from React Router

import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const BASE_URL = 'https://sugamexpress.onrender.com';

const SingleProduct = () => {
  const { id } = useParams(); // Retrieve product ID from URL params
  const [product, setProduct] = useState(null); // State to hold product data
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image URL
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    // Function to fetch product data
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://sugamexpress.onrender.com/api/v1/products/${id}`
        );
        setProduct(response.data);
        // Set the first photo as the selected image initially
        if (response.data.photos && response.data.photos.length > 0) {
          setSelectedImage(response.data.photos[0]);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct(); // Call fetchProduct when component mounts
  }, [id]); // Depend on 'id' to re-fetch data when 'id' changes

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const handleInquirySubmit = async e => {
    e.preventDefault();
    const { name, email, phone, message } = e.target.elements;

    try {
      const response = await axios.post(
        'https://sugamexpress.onrender.com/api/v1/inquiry/create',
        {
          productName: product.title,
          name: name.value,
          email: email.value,
          number: phone.value,
          message: message.value,
        }
      );
      console.log(response.data);
      toast({
        title: 'Inquiry Sent',
        description: response.data.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose(); // Close modal after successful submission
    } catch (error) {
      console.error('Error sending inquiry:', error);
      toast({
        title: 'Error',
        description: 'Failed to send inquiry',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Render loading state or handle if product is not yet fetched
  if (!product) return <div>Loading...</div>;

  // const handleImageClick = imageUrl => {
  //   setSelectedImage(imageUrl);
  // };

  return (
    <Container maxW="container.xl" py={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="start"
        spacing={10}
      >
        <Box w={{ base: '100%', md: '50%' }}>
          {product.photos && product.photos.length > 0 && (
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              selectedItem={
                selectedImage ? product.photos.indexOf(selectedImage) : 0
              }
              onChange={index => setSelectedImage(product.photos[index])}
            >
              {product.photos.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={`${BASE_URL}/public/photos/${imageUrl}`}
                  alt={`Product Image ${index + 1}`}
                  boxSize="500px"
                  objectFit="cover"
                  borderRadius="md"
                />
              ))}
            </Carousel>
          )}
          {product.photos && product.photos.length > 0 && (
            <SimpleGrid columns={5} spacing={2} mt={3}>
              {product.photos.map((url, index) => (
                <Image
                  key={index}
                  src={`${BASE_URL}/public/photos/${url}`}
                  alt={`Thumbnail ${index + 1}`}
                  boxSize="100px"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleImageClick(url)}
                  border={selectedImage === url ? '2px solid teal' : 'none'}
                  _hover={{ transform: 'scale(1.1)' }}
                  transition="transform 0.2s ease-in-out"
                />
              ))}
            </SimpleGrid>
          )}
        </Box>
        <VStack w={{ base: '100%', md: '45%' }} align="start" spacing={5}>
          <Heading>{product.title}</Heading>
          <HStack spacing={3} align="center">
            <Badge
              fontSize="lg"
              color="white"
              bg={'blue.500'}
              px={2}
              py={1}
              borderRadius="md"
              textTransform="uppercase"
            >
              {product.category}
            </Badge>
            <Text fontSize="2xl" fontWeight="bold" color="teal">
              {product.price}
            </Text>
          </HStack>
          <Text fontSize="lg" color="gray.600">
            {product.detailedDescription}
          </Text>
          {product.features && (
            <VStack align="start" spacing={1} mt={4}>
              {product.features.map((feature, index) => (
                <Text
                  key={index}
                  fontSize="sm"
                  color="gray.600"
                  _hover={{ color: 'blue.500' }}
                  transition="color 0.2s ease-in-out"
                >
                  {feature}
                </Text>
              ))}
            </VStack>
          )}
          <Button
            colorScheme="blue"
            size="lg"
            onClick={onOpen}
            _hover={{ bg: 'blue.500', color: 'white' }}
            transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
          >
            Inquire Now
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Inquire about {product.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form onSubmit={handleInquirySubmit}>
                  <FormControl id="product-name" mb={4}>
                    <FormLabel>Product Name</FormLabel>
                    <Input value={product.title} isReadOnly />
                  </FormControl>
                  <FormControl id="name" mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" placeholder="Your name" type="text" />
                  </FormControl>
                  <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input name="email" type="email" placeholder="Your email" />
                  </FormControl>
                  <FormControl id="phone" mb={4}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      name="phone"
                      placeholder="Your phone number"
                      type="tel"
                    />
                  </FormControl>
                  <FormControl id="message" mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea name="message" placeholder="Your message" />
                  </FormControl>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Send Inquiry
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Cancel
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SingleProduct;
