import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Grid,
  GridItem,
  Image,
  Text,
  useBreakpointValue,
  Checkbox,
  CheckboxGroup,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RiFilterLine } from 'react-icons/ri';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const {
    isOpen: isFilterOpen,
    onOpen: onFilterOpen,
    onClose: onFilterClose,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const toast = useToast(); // Toast for notifications

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const BASE_URL = 'http://localhost:5000';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/v1/products/getall'
      );

      const path = response.data.map(product =>
        product.photo.split('\\').pop().split('/').pop()
      );
      setProducts(response.data);
      // Extract categories and colors from the products
      setCategories([
        ...new Set(response.data.map(product => product.category)),
      ]);
      setColors([
        ...new Set(response.data.map(product => product.colorOfPart)),
      ]);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryChange = values => {
    setSelectedCategories(values);
  };

  const handleColorChange = values => {
    setSelectedColors(values);
  };

  const handleInquireClick = product => {
    setCurrentProduct(product);
    onOpen();
  };

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (selectedColors.length === 0 ||
        selectedColors.includes(product.colorOfPart))
    );
  });

  const FilterOptions = ({ w }) => (
    <VStack as="aside" width={w} alignItems="flex-start" spacing={5}>
      <Box width="100%">
        <Heading size="md" mb={3}>
          Categories
        </Heading>
        <CheckboxGroup
          onChange={handleCategoryChange}
          value={selectedCategories}
        >
          <VStack alignItems="flex-start" spacing={2}>
            {categories.map(category => (
              <Checkbox key={category} value={category}>
                {category}
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box width="100%">
        <Heading size="md" mb={3}>
          Colors
        </Heading>
        <CheckboxGroup onChange={handleColorChange} value={selectedColors}>
          <VStack alignItems="flex-start" spacing={2}>
            {colors.map(color => (
              <Checkbox key={color} value={color}>
                {color}
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </Box>
    </VStack>
  );

  const handleInquirySubmit = async e => {
    e.preventDefault();
    const { name, email, phone, message } = e.target.elements;

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/inquiry/create',
        {
          productName: currentProduct.title,
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

  return (
    <Container minH={'100vh'} maxW={'container.xl'} py={10}>
      <Heading
        fontFamily={'Oswald'}
        fontWeight={'500'}
        py={5}
        textAlign={'left'}
      >
        Products
      </Heading>
      <Stack
        direction={['column', 'column', 'column', 'row']}
        alignItems="start"
        spacing={5}
      >
        {isMobile ? (
          <>
            <Button
              onClick={onFilterOpen}
              colorScheme="blue"
              variant={'ghost'}
              mb={5}
            >
              Filters <RiFilterLine />
            </Button>
            <Modal isOpen={isFilterOpen} onClose={onFilterClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Filter Options</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FilterOptions />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onFilterClose}>
                    Apply Filters
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        ) : (
          <FilterOptions w={'250px'} />
        )}

        <Box flex={1}>
          <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
            {filteredProducts.map(product => (
              <GridItem key={product._id}>
                <Box
                  maxH={'600px'}
                  h={'100%'}
                  minH={'600px'}
                  border="1px solid"
                  borderColor="gray.200"
                  p={5}
                  borderRadius="md"
                  boxShadow="md"
                  _hover={{ boxShadow: 'lg' }}
                >
                  <Link to={`/products/${product._id}`}>
                    <Image
                      src={`${BASE_URL}/public/photos/${product.photo
                        .split('\\')
                        .pop()
                        .split('/')
                        .pop()}`}
                      alt={product.title}
                      mb={3}
                      borderRadius="md"
                      boxSize={['350px', '350px', '350px', '250px', '350px']}
                      objectFit="cover"
                    />

                    <Heading size="md" mb={2} fontWeight={'500'}>
                      {product.title}
                    </Heading>
                    <Badge colorScheme="blue" mb={2} fontSize={'lg'}>
                      {product.price}
                    </Badge>
                    <Text mb={4}>{product.description}</Text>
                  </Link>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    onClick={() => handleInquireClick(product)}
                  >
                    Inquire Now
                  </Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Stack>

      {currentProduct && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Inquire about {currentProduct.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleInquirySubmit}>
                <FormControl id="product-name" mb={4}>
                  <FormLabel>Product Name</FormLabel>
                  <Input value={currentProduct.title} isReadOnly />
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
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Products;
