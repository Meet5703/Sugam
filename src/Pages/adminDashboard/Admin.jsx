import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Text, Button } from '@chakra-ui/react';
import CreateProduct from './CreateProductClient';
import ProductList from './ProductListClient';
import InquiryList from './InquiryList';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

const AdminDashboard = () => {
  const [currentTab, setCurrentTab] = useState('productList');
  const [currentProductId, setCurrentProductId] = useState(null);

  const handleTabChange = tab => {
    setCurrentTab(tab);
  };

  const handleEditProduct = productId => {
    setCurrentTab('editProduct');
    setCurrentProductId(productId);
  };

  const handleDeleteProduct = productId => {
    setCurrentTab('deleteProduct');
    setCurrentProductId(productId);
  };

  return (
    <ChakraProvider>
      <Flex>
        {/* Sidebar */}
        <Box
          as="aside"
          w="250px"
          bg="gray.200"
          p={4}
          borderRight="1px solid"
          borderColor="gray.300"
        >
          <Text fontSize="2xl" mb={5} fontWeight="bold">
            Admin Dashboard
          </Text>
          <Flex direction="column">
            <Button
              variant="ghost"
              colorScheme={currentTab === 'createProduct' ? 'blue' : 'gray'}
              onClick={() => handleTabChange('createProduct')}
              mb={3}
            >
              Create Product
            </Button>
            <Button
              variant="ghost"
              colorScheme={currentTab === 'productList' ? 'blue' : 'gray'}
              onClick={() => handleTabChange('productList')}
              mb={3}
            >
              Product List
            </Button>
            <Button
              variant="ghost"
              colorScheme={currentTab === 'inquiries' ? 'blue' : 'gray'}
              onClick={() => handleTabChange('inquiries')}
              mb={3}
            >
              Inquiries
            </Button>
          </Flex>
        </Box>

        {/* Main Section */}
        <Flex direction="column" flex={1} p={5}>
          {/* Render content based on currentTab */}
          {currentTab === 'createProduct' && <CreateProduct />}
          {currentTab === 'productList' && (
            <ProductList
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          )}
          {currentTab === 'inquiries' && <InquiryList />}
          {currentTab === 'editProduct' && (
            <EditProduct productId={currentProductId} />
          )}
          {currentTab === 'deleteProduct' && (
            <DeleteProduct productId={currentProductId} />
          )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default AdminDashboard;
