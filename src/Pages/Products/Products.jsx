import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from './Productdata.json';

const { products, categories, colors } = productsData;

const Products = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentProduct, setCurrentProduct] = useState(null);

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
      (selectedColors.length === 0 || selectedColors.includes(product.color))
    );
  });

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
      <HStack alignItems="start" spacing={5}>
        <VStack
          as="aside"
          width={{ base: '100%', md: '30%', lg: '25%' }}
          alignItems="flex-start"
          spacing={5}
        >
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
        <Box flex={1}>
          <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
            {filteredProducts.map(product => (
              <GridItem key={product.id}>
                <Box
                  border="1px solid"
                  borderColor="gray.200"
                  p={5}
                  borderRadius="md"
                  boxShadow="md"
                  _hover={{ boxShadow: 'lg' }}
                >
                  <Link to={`/products/${product.id}`}>
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      mb={3}
                      borderRadius="md"
                      boxSize="250px"
                      objectFit="cover"
                    />

                    <Heading size="md" mb={2}>
                      {product.title}
                    </Heading>
                    <Badge colorScheme="blue" mb={2}>
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
      </HStack>

      {currentProduct && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Inquire about {currentProduct.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <FormControl id="product-name" mb={4}>
                  <FormLabel>Product Name</FormLabel>
                  <Input value={currentProduct.title} isReadOnly />
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
      )}
    </Container>
  );
};

export default Products;
