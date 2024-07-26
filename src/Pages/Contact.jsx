import {
  AspectRatio,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const toast = useToast();
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/contact/submit',
        {
          name,
          email,
          phoneNumber,
          countryCode,
          message,
        }
      );

      if (response.status === 201) {
        toast({
          title: 'Message sent successfully',
          description: 'Your message has been sent successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setSuccess(true);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setCountryCode('+1');
        setMessage('');
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An error occurred while submitting the form.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setError(
        'An error occurred while submitting the form. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container my={'16'} maxW={'container.xl'} h={'100vh'} py={8}>
      <Heading textAlign={'center'} mb={6}>
        Contact Us
      </Heading>
      <HStack justifyContent={'space-evenly'} w={'full'} alignItems={'center'}>
        <VStack
          mb={16}
          w={'full'}
          display={['none', 'none', 'block']}
          // spacing={'8'}
          gap={8}
          maxH={'500px'}
        >
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.335902285328!2d-122.41941568468144!3d37.774929779758235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5d5b7f%3A0x5b5b5b5b5b5b5b5b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1605713899985!5m2!1sen!2sin"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </AspectRatio>
          <Box
            mt={4}
            p={4}
            border={'1px solid #3182CE'}
            // boxShadow={'0 0 10px 2px #3182CE'}
            borderRadius={'lg'}
          >
            <Heading size="md">Contact Details</Heading>
            <Box mt={4}>
              <strong>Address:</strong>
              <p>123 Main Street, San Francisco, CA 94101</p>
            </Box>
            <Box mt={4}>
              <strong>Phone:</strong>
              <p>(123) 456-7890</p>
            </Box>
            <Box mt={4}>
              <strong>Email:</strong>
              <p>contact@example.com</p>
            </Box>
          </Box>
        </VStack>
        <VStack h={'full'} w={'full'} justifyContent={'center'} spacing={'16'}>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box boxShadow={'0 0 10px 2px #3182CE'} p={'4'} borderRadius={'lg'}>
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  required
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  type="text"
                  focusBorderColor="blue.500"
                />
              </Box>
              <Box my={'4'}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  required
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  type="email"
                  focusBorderColor="blue.500"
                />
              </Box>
              <Box my={'4'}>
                <FormControl mt={4}>
                  <FormLabel>Phone Number</FormLabel>
                  <HStack>
                    <Select
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                      width="25%"
                    >
                      <option value="+1">+1 </option>
                      <option value="+44">+44 </option>
                      <option value="+91">+91 </option>
                      {/* Add more options as needed */}
                    </Select>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                  </HStack>
                </FormControl>
              </Box>
              <Box my={'4'}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  required
                  id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Enter Your Message.."
                  focusBorderColor="blue.500"
                />
              </Box>
              {error && (
                <Box my={'4'} color="red.500">
                  {error}
                </Box>
              )}
              {success && (
                <Box my={'4'} color="green.500">
                  Message sent successfully!
                </Box>
              )}
              <Button
                my={'4'}
                w={'full'}
                colorScheme={'blue'}
                type="submit"
                isLoading={loading}
              >
                Send Message
              </Button>
              <Box my={'4'}>
                Request for a course?{' '}
                <Link to={'/request'}>
                  <Button colorScheme={'blue'} variant={'link'}>
                    Click
                  </Button>{' '}
                  here
                </Link>
              </Box>
            </Box>
          </form>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Contact;
