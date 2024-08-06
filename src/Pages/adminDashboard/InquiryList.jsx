import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Flex,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { format } from 'date-fns';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productNameFilter, setProductNameFilter] = useState('');
  const [userNameFilter, setUserNameFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      let url = 'https://sugamexpress.onrender.com/api/v1/inquiry/getall';
      const params = [];

      if (productNameFilter) {
        params.push(`productName=${productNameFilter}`);
      }
      if (userNameFilter) {
        params.push(`name=${userNameFilter}`);
      }
      if (dateFilter) {
        const formattedDate = format(new Date(dateFilter), 'yyyy-MM-dd');
        params.push(`createdAt=${formattedDate}`);
      }

      if (params.length > 0) {
        url += `?${params.join('&')}`;
      }

      const response = await axios.get(url);
      setInquiries(response.data);
    } catch (error) {
      setError('Failed to fetch inquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleSearch = () => {
    fetchInquiries();
  };

  const handleResetFilters = () => {
    setProductNameFilter('');
    setUserNameFilter('');
    setDateFilter('');
    fetchInquiries();
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
    <Box maxW="container.xl" mx="auto" p={5}>
      <Heading mb={5}>Inquiry List</Heading>

      <Flex mb={4}>
        <Input
          type="text"
          placeholder="Search by Product Name"
          value={productNameFilter}
          onChange={e => setProductNameFilter(e.target.value)}
          mr={2}
        />
        <Input
          type="text"
          placeholder="Search by User Name"
          value={userNameFilter}
          onChange={e => setUserNameFilter(e.target.value)}
          mr={2}
        />
        <Input
          type="date"
          placeholder="Search by Date"
          value={dateFilter}
          onChange={e => setDateFilter(e.target.value)}
          mr={2}
        />
        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
        <Button ml={2} onClick={handleResetFilters}>
          Reset
        </Button>
      </Flex>

      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <TableCaption>All received inquiries</TableCaption>
          <Thead>
            <Tr>
              <Th>Product Name</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {inquiries.map(inquiry => (
              <Tr key={inquiry._id}>
                <Td>{inquiry.productName}</Td>
                <Td>{inquiry.name}</Td>
                <Td>{inquiry.email}</Td>
                <Td>{inquiry.number}</Td>
                <Td>{inquiry.message}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InquiryList;
