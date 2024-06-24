import React, { useState } from 'react';
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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaStar } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';

// Sample product data
const product = {
  id: 1,
  title: 'Brake Disc for Audi A3',
  description:
    'EEE I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
  imageUrls: [
    'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforAudiA3_bc9d27df-e58f-4ae1-b003-ebbbc6cb9803_1024x1024.jpg?v=1643284110',
    'https://bigon-7.myshopify.com/cdn/shop/products/BrakeDiscforBMW_619478df-5ca2-4d58-ba8e-85bb3a23723d_1024x1024.jpg?v=1643284112',
    'https://bigon-7.myshopify.com/cdn/shop/products/BrakePadsforChevrolet_5e88bd1e-156f-4486-b9b2-610b223dc02f_compact.jpg?v=1643284111',
    'https://bigon-7.myshopify.com/cdn/shop/products/CokerTire700219Whitewall_fc30b636-25ef-4f53-b93e-877286500f4e_compact.jpg?v=1643284111',
    'https://bigon-7.myshopify.com/cdn/shop/products/DOEReplicaWheels_27c2548f-749f-4188-b5a2-39b24b354c82_compact.jpg?v=1643284111',
  ],
  category: 'Brake Disc',
  categoryColor: '#3182CE', // Category color added
  price: '$29.00',
  reviews: [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Great quality and performance!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Good value for money.',
    },
  ],
  features: [
    '16 people are viewing this right now',
    '1 Year AL Jazeera Brand Warranty',
    '30 Day Return Policy',
    'Cash on Delivery available',
  ],
};

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(product.imageUrls[0]);
  const [rating, setRating] = useState(0); // State variable to manage rating
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal state

  // Calculate average rating
  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
      : 0;

  const handleRatingClick = value => {
    setRating(value); // Function to update rating state
  };

  const handleHelpfulClick = reviewId => {
    // Logic to handle marking a review as helpful
    // This can be implemented based on your backend or state management approach
    console.log(`Mark review ${reviewId} as helpful`);
  };

  const handleInquireClick = () => {
    onOpen(); // Open modal on Inquire Now button click
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="start"
        spacing={10}
      >
        {/* Product Images Carousel */}
        <Box w={{ base: '100%', md: '50%' }}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            selectedItem={product.imageUrls.indexOf(selectedImage)}
            onChange={index => setSelectedImage(product.imageUrls[index])}
          >
            {product.imageUrls.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                alt={`Product Image ${index + 1}`}
                boxSize="500px"
                objectFit="cover"
                borderRadius="md"
              />
            ))}
          </Carousel>
          {/* Thumbnails for image selection */}
          <SimpleGrid columns={5} spacing={2} mt={3}>
            {product.imageUrls.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt={`Thumbnail ${index + 1}`}
                boxSize="100px"
                borderRadius="md"
                cursor="pointer"
                onClick={() => setSelectedImage(url)}
                border={selectedImage === url ? '2px solid teal' : 'none'}
                _hover={{ transform: 'scale(1.1)' }} // Hover effect
                transition="transform 0.2s ease-in-out" // Smooth transition
              />
            ))}
          </SimpleGrid>
        </Box>
        {/* Product Details */}
        <VStack w={{ base: '100%', md: '45%' }} align="start" spacing={5}>
          <Heading>{product.title}</Heading>
          {/* Category and Price */}
          <HStack spacing={3} align="center">
            <Badge
              fontSize="lg"
              color="white"
              bg={product.categoryColor}
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
          {/* Product description */}
          <Text fontSize="lg" color="gray.600">
            {product.description}
          </Text>
          {/* Features list */}
          <VStack align="start" spacing={1} mt={4}>
            {product.features.map((feature, index) => (
              <Text
                key={index}
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'blue.500' }} // Hover effect on features
                transition="color 0.2s ease-in-out" // Smooth transition
              >
                {feature}
              </Text>
            ))}
          </VStack>
          {/* Inquire Now button */}
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleInquireClick}
            _hover={{ bg: 'blue.500', color: 'white' }} // Hover effect
            transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out" // Smooth transition
          >
            Inquire Now
          </Button>
          {/* Inquiry Modal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Inquire about {product.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form>
                  <FormControl id="product-name" mb={4}>
                    <FormLabel>Product Name</FormLabel>
                    <Input value={product.title} isReadOnly />
                  </FormControl>
                  <FormControl id="name" mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Your name" type="text" />
                  </FormControl>
                  <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Your email" />
                  </FormControl>
                  <FormControl id="phone" mb={4}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input placeholder="Your phone number" type="tel" />
                  </FormControl>
                  <FormControl id="message" mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Your message" />
                  </FormControl>
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
        </VStack>
      </Flex>

      {/* <Box mt={10}>
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>
              Customer Reviews
            </Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>
              Write a Review
            </Tab>
          </TabList>

          <TabPanels>
            
            <TabPanel>
              <VStack align="start" spacing={5} w="full">
                {product.reviews.length > 0 ? (
                  product.reviews.map(review => (
                    <Box
                      key={review.id}
                      p={5}
                      shadow="md"
                      borderWidth="1px"
                      borderRadius="md"
                      w="full"
                      maxW={{ base: 'full', md: '600px' }}
                      _hover={{ shadow: 'lg' }} // Hover effect
                      transition="box-shadow 0.2s ease-in-out" // Smooth transition
                    >
                      <HStack justifyContent="space-between" mb={2}>
                        <Box>
                          <Heading fontSize="sm">{review.name}</Heading>
                          <HStack mt={1} spacing={1}>
                            {[...Array(review.rating)].map((_, i) => (
                              <FaStar key={i} color="#FFD700" />
                            ))}
                          </HStack>
                        </Box>
                        <HStack>
                          <Button
                            variant="ghost"
                            colorScheme="blue"
                            size="sm"
                            onClick={() => handleHelpfulClick(review.id)}
                            _hover={{ color: 'blue.500' }} // Hover effect
                            transition="color 0.2s ease-in-out" // Smooth transition
                          >
                            Helpful
                          </Button>
                        </HStack>
                      </HStack>
                      <Text fontSize="sm" color="gray.600">
                        {review.comment}
                      </Text>
                    </Box>
                  ))
                ) : (
                  <Text>No reviews yet.</Text>
                )}
              </VStack>
            </TabPanel>

            <TabPanel>
              <form>
                <VStack align="start" spacing={3}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Your name" size="sm" />
                  </FormControl>
                  <FormControl id="rating" isRequired>
                    <FormLabel>Rating</FormLabel>
                    <HStack spacing={1}>
                      {[...Array(5)].map((_, i) => (
                        <Button
                          key={i}
                          variant="ghost"
                          colorScheme="teal"
                          onClick={() => handleRatingClick(i + 1)}
                          size="sm"
                          _hover={{ color: 'teal.500' }} // Hover effect
                          transition="color 0.2s ease-in-out" // Smooth transition
                        >
                          <FaStar
                            color={i + 1 <= rating ? '#FFD700' : 'gray.300'}
                          />
                        </Button>
                      ))}
                    </HStack>
                  </FormControl>
                  <FormControl id="comment" isRequired>
                    <FormLabel>Comment</FormLabel>
                    <Textarea placeholder="Your review" size="sm" />
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    type="submit"
                    _hover={{ bg: 'blue.500' }} // Hover effect
                    transition="background-color 0.2s ease-in-out" // Smooth transition
                  >
                    Submit Review
                  </Button>
                </VStack>
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box> */}
    </Container>
  );
};

export default SingleProduct;
