import {
  Container,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const CardOfPart = ({
  img,
  title1,
  para1,
  title2,
  para2,
  para3,
  listItems,
}) => {
  return (
    <>
      <Container
        minW={'container.xl'}
        mt={4}
        display={['none', 'none', 'none', 'none', 'block']}
      >
        <Stack direction={['column', 'column', 'row']} w={'100%'} gap={20}>
          <Image src={img} objectFit={'contain'} mt={20} />
          <VStack alignItems={'flex-start'} spacing={5}>
            <Heading
              px={4}
              fontSize={'20px'}
              textTransform={'uppercase'}
              letterSpacing={'2px'}
              fontWeight={600}
            >
              {title1}
            </Heading>
            <Text
              px={4}
              fontSize={['30px', '40px', '60px']}
              lineHeight={['30px', '40px', '60px']}
              fontWeight={600}
            >
              {para1.split('-').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== para1.split('-').length - 1 && <br />}
                </React.Fragment>
              ))}
            </Text>
            <Heading mt={5} px={4} fontSize={'24px'}>
              {title2}
            </Heading>
            <Text px={4}>{para2}</Text>
            <List px={6} spacing={3}>
              {listItems.map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={IoIosArrowForward} />
                  <strong>{item.title}:</strong> {item.description}
                </ListItem>
              ))}
            </List>
            <Text px={4}>{para3}</Text>
          </VStack>
        </Stack>
      </Container>
      <Container
        mx={'auto'}
        minW={'container.xl'}
        mt={4}
        display={['none', 'none', 'none', 'block', 'none']}
      >
        <Stack
          direction={['column', 'column', 'column', 'column']}
          w={'80%'}
          gap={20}
        >
          <VStack alignItems={'flex-start'} spacing={5}>
            <Heading
              px={4}
              fontSize={'20px'}
              textTransform={'uppercase'}
              letterSpacing={'2px'}
              fontWeight={600}
            >
              {title1}
            </Heading>
            <Text
              px={4}
              fontSize={['30px', '40px', '60px']}
              lineHeight={['30px', '40px', '60px']}
              fontWeight={600}
            >
              {para1.split('-').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== para1.split('-').length - 1 && <br />}
                </React.Fragment>
              ))}
            </Text>
            <Image
              alignSelf={'center'}
              src={img}
              objectFit={'contain'}
              w={'400px'}
              mt={20}
            />
            <Heading mt={5} px={4} fontSize={'24px'}>
              {title2}
            </Heading>
            <Text px={4}>{para2}</Text>
            <List px={6} spacing={3}>
              {listItems.map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={IoIosArrowForward} />
                  <strong>{item.title}:</strong> {item.description}
                </ListItem>
              ))}
            </List>
            <Text px={4}>{para3}</Text>
          </VStack>
        </Stack>
      </Container>
      <Container
        mx={['-10px', '-10px', '-10px', '-10px', 'auto']}
        minW={'container.xl'}
        mt={4}
        display={['block', 'block', 'block', 'none', 'none']}
      >
        <Stack
          direction={['column', 'column', 'column', 'column']}
          w={['30%', '60%']}
          gap={20}
        >
          <VStack alignItems={'flex-start'} spacing={5}>
            <Heading
              px={4}
              fontSize={'20px'}
              textTransform={'uppercase'}
              letterSpacing={'2px'}
              fontWeight={600}
            >
              {title1}
            </Heading>
            <Text
              px={4}
              fontSize={['30px', '40px', '50px']}
              lineHeight={['30px', '40px', '60px']}
              fontWeight={600}
            >
              {para1.split('-').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== para1.split('-').length - 1 && <br />}
                </React.Fragment>
              ))}
            </Text>
            <Image
              mx={['80px', '140px']}
              src={img}
              objectFit={'contain'}
              w={['250px', '400px']}
              mt={4}
            />
            <Heading mt={5} px={4} fontSize={'24px'}>
              {title2}
            </Heading>
            <Text px={4}>{para2}</Text>
            <List px={6} spacing={3}>
              {listItems.map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={IoIosArrowForward} />
                  <strong>{item.title}:</strong> {item.description}
                </ListItem>
              ))}
            </List>
            <Text px={4}>{para3}</Text>
          </VStack>
        </Stack>
      </Container>
    </>
  );
};

export default CardOfPart;
