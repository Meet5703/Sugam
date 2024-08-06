import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Image,
  SimpleGrid,
  Container,
  Checkbox,
} from '@chakra-ui/react';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [category, setCategory] = useState('');
  const [colorOfPart, setColorOfPart] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isExclusive, setIsExclusive] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('detailedDescription', detailedDescription);
    formData.append('category', category);
    formData.append('colorOfPart', colorOfPart);
    formData.append('isFeatured', isFeatured);
    formData.append('isExclusive', isExclusive);
    if (photo) formData.append('photo', photo);
    photos.forEach((photo, index) => {
      formData.append('photos', photo); // Ensure the field name is 'photos'
    });

    try {
      const response = await axios.post(
        'https://sugamexpress.onrender.com/api/v1/products/create', // Ensure the URL is correct
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Product created successfully');
      console.log(response.data);
    } catch (error) {
      console.error(
        'Error creating product:',
        error.response?.data || error.message
      );
      alert(
        `Error creating product: ${
          error.response?.data.message || error.message
        }`
      );
    }
  };

  const handlePhotoChange = e => {
    setPhoto(e.target.files[0]);
  };

  const handlePhotosChange = e => {
    const selectedPhotos = Array.from(e.target.files);
    setPhotos(selectedPhotos);
  };

  return (
    <Container maxW="container.sm" py={10}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Detailed Description</FormLabel>
          <Textarea
            value={detailedDescription}
            onChange={e => setDetailedDescription(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Color of Part</FormLabel>
          <Input
            type="text"
            value={colorOfPart}
            onChange={e => setColorOfPart(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Is Featured</FormLabel>
          <Checkbox
            type="checkbox"
            checked={isFeatured}
            onChange={e => setIsFeatured(e.target.checked)}
          />
          <FormLabel>Is Exclusive</FormLabel>
          <Checkbox
            type="checkbox"
            checked={isExclusive}
            onChange={e => setIsExclusive(e.target.checked)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Photo</FormLabel>
          <Input type="file" onChange={handlePhotoChange} />
          {photo && (
            <Image
              src={URL.createObjectURL(photo)}
              alt="Product Preview"
              mt={2}
              boxSize="150px"
              objectFit="cover"
            />
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Photos</FormLabel>
          <Input type="file" multiple onChange={handlePhotosChange} />
          <SimpleGrid columns={3} spacing={2} mt={2}>
            {photos.length > 0 &&
              photos.map((photo, index) => (
                <Image
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Product Preview ${index}`}
                  boxSize="100px"
                  objectFit="cover"
                />
              ))}
          </SimpleGrid>
        </FormControl>
        <Button type="submit">Create Product</Button>
      </form>
    </Container>
  );
};

export default CreateProduct;
