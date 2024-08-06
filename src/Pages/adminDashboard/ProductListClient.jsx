import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  TableContainer,
  Checkbox,
  Textarea,
} from '@chakra-ui/react';
import { useTable, useFilters, useSortBy } from 'react-table';
import { format } from 'date-fns';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [category, setCategory] = useState('');
  const [colorOfPart, setColorOfPart] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isExclusive, setIsExclusive] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://sugamexpress.onrender.com/api/v1/products/getall'
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async id => {
    try {
      await axios.delete(
        `https://sugamexpress.onrender.com/api/v1/products/${id}`
      );
      setProducts(products.filter(product => product._id !== id));
      alert('Product deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting product');
    }
  };

  const handleEditProduct = product => {
    setCurrentProduct(product);
    setTitle(product.title);
    setDescription(product.description);
    setDetailedDescription(product.detailedDescription);
    setCategory(product.category);
    setColorOfPart(product.colorOfPart);
    setIsFeatured(product.isFeatured);
    setIsExclusive(product.isExclusive);
    setPhoto(product.photo);
    setPhotos(product.photos);
    onOpen();
  };

  const handleModalClose = () => {
    onClose();
    setCurrentProduct(null);
    setTitle('');
    setDescription('');
    setDetailedDescription('');
    setCategory('');
    setColorOfPart('');
    setIsFeatured(false);
    setIsExclusive(false);
    setPhoto(null);
    setPhotos([]);
  };

  const handleUpdateProduct = async () => {
    const updatedProduct = {
      title,
      description,
      detailedDescription,
      category,
      colorOfPart,
      isFeatured,
      isExclusive,
      photo,
      photos,
    };

    try {
      await axios.put(
        `https://sugamexpress.onrender.com/api/v1/products/${currentProduct._id}`,
        updatedProduct
      );
      fetchProducts(); // Refresh products after update
      onClose();
      setCurrentProduct(null);
      alert('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  // React Table configuration
  const data = useMemo(() => products, [products]);

  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
        sortType: 'alphanumeric',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Date',
        accessor: 'createdAt',
        sortType: 'datetime',
        Cell: ({ value }) => format(new Date(value), 'MM/dd/yyyy'),
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <Flex justifyContent="center">
            <Button
              colorScheme="blue"
              variant="outline"
              mr={2}
              onClick={() => handleEditProduct(row.original)}
            >
              Edit
            </Button>
            <Button
              colorScheme="red"
              onClick={() => deleteProduct(row.original._id)}
            >
              Delete
            </Button>
          </Flex>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters, useSortBy);

  const handleDateFilterChange = async e => {
    const value = e.target.value.trim();

    try {
      const response = await axios.get(
        'https://sugamexpress.onrender.com/api/v1/products/getall'
      );
      const allProducts = response.data;

      if (!value) {
        setProducts(allProducts); // Reset to all products if search is empty
        return;
      }

      const searchDate = new Date(value);
      if (isNaN(searchDate.getTime())) {
        // Invalid date format
        setProducts([]);
        return;
      }

      const filteredProducts = allProducts.filter(product => {
        const productDate = new Date(product.createdAt); // Assuming createdAt is in ISO 8601 format
        if (isNaN(productDate.getTime())) {
          console.warn(`Invalid date format for product: ${product._id}`);
          return false; // Filter out products with invalid dates
        }

        return (
          productDate.getDate() === searchDate.getDate() &&
          productDate.getMonth() === searchDate.getMonth() &&
          productDate.getFullYear() === searchDate.getFullYear()
        );
      });

      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error state or alert the user
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
          <AlertDescription>Please try again later.</AlertDescription>
        </Alert>
      </Box>
    );
  }

  return (
    <Box maxW={'80vw'} w={'100%'} mx="auto" p={5}>
      <Flex mb={4}>
        <Input
          type="text"
          placeholder="Search by Date (MM/dd/yyyy)..."
          onChange={handleDateFilterChange}
          mb={4}
          w="100%"
          mx="auto"
          display="block"
        />
      </Flex>

      <TableContainer>
        <Table variant="striped" colorScheme="blue" {...getTableProps()}>
          <TableCaption>All Products</TableCaption>
          <Thead>
            {headerGroups.map(headerGroup => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Edit Product Modal */}
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter title..."
              mb={4}
            />
            <Textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter description..."
              mb={4}
            />
            <Textarea
              value={detailedDescription}
              onChange={e => setDetailedDescription(e.target.value)}
              placeholder="Enter detailed description..."
              mb={4}
            />
            <Input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="Enter category..."
              mb={4}
            />
            <Input
              type="text"
              value={colorOfPart}
              onChange={e => setColorOfPart(e.target.value)}
              placeholder="Enter color of part..."
              mb={4}
            />
            <Checkbox
              isChecked={isFeatured}
              onChange={e => setIsFeatured(e.target.checked)}
              mb={4}
            >
              Featured
            </Checkbox>
            <Checkbox
              isChecked={isExclusive}
              onChange={e => setIsExclusive(e.target.checked)}
              mb={4}
            >
              Exclusive
            </Checkbox>
            <Input
              type="file"
              onChange={e => setPhoto(e.target.files[0])}
              mb={4}
            />
            <Input
              type="file"
              multiple
              onChange={e => setPhotos([...e.target.files])}
              mb={4}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleUpdateProduct}>
              Save
            </Button>
            <Button onClick={handleModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductList;
