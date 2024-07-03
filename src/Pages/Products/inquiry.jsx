import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

const Inquiry = ({ productName }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    productName,
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://sugamexpress.onrender.com/api/v1/inquiry/create',
        formData
      );
      console.log(response.data);
      toast({
        title: 'Inquiry Sent',
        description: response.data.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setFormData({
        productName,
        name: '',
        email: '',
        number: '',
        message: '',
      });
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
    <form onSubmit={handleSubmit}>
      <FormControl id="product-name" mb={4}>
        <FormLabel>Product Name</FormLabel>
        <Input value={productName} isReadOnly />
      </FormControl>
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          type="text"
        />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Your email"
        />
      </FormControl>
      <FormControl id="phone" mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your phone number"
          type="tel"
        />
      </FormControl>
      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
        />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Send Inquiry
      </Button>
    </form>
  );
};

export default Inquiry;
