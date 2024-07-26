import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import img from '../assets/about-us-banner.jpg';
import img2 from '../assets/automotive-exhibition.jpg';
import img3 from '../assets/vision.png';
import img4 from '../assets/mission.png';
import img5 from '../assets/ventilated.png';
import img6 from '../assets/cd1.jpg';
import img7 from '../assets/cd2.jpg';

const AboutUs = () => {
  return (
    <Container
      maxW={'98vw'}
      w={'100%'}
      minH={'100vh'}
      p={0}
      boxSizing="border-box"
      m={0}
      padding={0}
    >
      <Box w={'100vw'} h={'60vh'} position={'relative'}>
        <Image
          w={'100%'}
          h={'100%'}
          src={img}
          objectPosition={'top'}
          objectFit={'cover'}
          position={'absolute'}
          top={0}
          left={0}
        />
        <Box
          position={'absolute'}
          top={0}
          left={0}
          w={'100%'}
          h={'100%'}
          bg={'rgba(0, 0, 0, 0.7)'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <VStack
            w={['100%', '100%', '100%', '60%']}
            mr={'300px'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
          >
            <Text
              textAlign={'left'}
              justifySelf={'flex-start'}
              px={'170px'}
              color={'white'}
              fontSize={['4xl', '4xl', '5xl', '6xl', '7xl']}
              fontWeight={'bold'}
            >
              Sugam Group Of Industries
            </Text>
            <Text color={'white'} ml={'170px'} fontSize={'16px'}>
              Committed to High Performance Manufacturing
            </Text>
          </VStack>
        </Box>
      </Box>
      <Box maxW={'container.xl'} mx={'auto'} w={'100%'}>
        <Stack
          mt={'48px'}
          flexDir={['column', 'column', 'column', 'column', 'row']}
          px={8}
          gap={'40px'}
          h={'100%'}
          alignItems={'center'}
        >
          <Image
            src={img2}
            boxSize={[
              'fit-content',
              'fit-content',
              'fit-content',
              'fit-content',
              '500px',
            ]}
            objectFit={'cover'}
          />
          <VStack gap={6} fontSize={'18px'}>
            <Text>
              Kaneri group started as a small scale machine shop with machining
              facilities as a Kaneri Enterprises in 2000 . We are one of the
              leading fully finished Disc Rotor & Flywheel Assembly
              manufacturers for automotive industry.
            </Text>
            <Text>
              We have 2 Grey cast iron & Ductile cast iron (S.G. iron) foundry
              units one of 990Sq.mt. and other of 6000Sq.mt. named as KANERI
              INDUSTRIES UNIT-I and UNIT –II and a machine shop of 4000 Sq .
              meters known as KANERI ENTERPRISES. The entire process of the
              Flywheel & disc rotor is In house captive foundry, having
              installed capacity of 1386 MT good casting per month. Our
              components range from 0.5 kg to 75 kg. We have separate core shop
              along with core baking facilities, fully automated CNC machine
              having facility of dynamic balancing & testing equipments from
              spectrometer onwards.
            </Text>
            <Text>
              Kaneri Group of industries is situated in Kolhapur district which
              is at the distance of 221 Km from Pune and 365 km from Mumbai. We
              are one of the leading manufacturer and supplier of a wide range
              of automobile components. Our range includes Automobile spare
              parts, brake disc (Ventilated and plain disc), Brake Drums and
              Flywheel Assembly. Fly over ten year as per customer samples at
              competitive and lowest rate as compared present market rate.
            </Text>
            <Text>
              We take care of our customer and ensure to offer them with quality
              assured automotive components with the help of highly of efficient
              team of research & development. Our aim is customer satisfaction
              through customer care. We believe in quality and continue updation
              of skills and machinery to achieve high quality standards of
              components.
            </Text>
            <Text>
              All components are manufactured to meet IATF 16949 quality system
              standards and are direct replacement of components supplied by
              Original Equipment Manufacturers with no modification in terms of
              quality and service.
            </Text>
          </VStack>
        </Stack>
      </Box>
      <Box
        maxW={'100vw'}
        mx={'auto'}
        px={0}
        backgroundColor={'#F2F2F2'}
        py={6}
        mt={10}
      >
        <Stack
          py={8}
          flexDirection={['column', 'column', 'column', 'row']}
          maxW={'container.xl'}
          mx={'auto'}
        >
          <Stack
            mx={'auto'}
            justifyContent={'center'}
            flexDir={['column', 'column', 'column', 'row']}
            // alignItems={'center'}
            w={'auto'}
          >
            {' '}
            <Image src={img3} boxSize={'90px'} bgBlendMode={'multiply'} />
            <VStack>
              <Heading children={'Vision'} />
              <Text>
                To be known for our technology, quality control, product
                performance & customer service. When it comes to automotive
                parts manufacturing "Kaneri Group" will be the one name that
                stands out not only in the local but global market.
              </Text>
            </VStack>
            {/* <Box w={'md'} px={4}></Box> */}
            {/* <Box w={'md'} px={4}>
           
          </Box> */}
          </Stack>
          <Stack
            mx={'auto'}
            justifyContent={'center'}
            flexDir={['column', 'column', 'column', 'row']}
            // alignItems={'center'}
            w={'auto'}
          >
            <Image src={img4} boxSize={'90px'} bgBlendMode={'multiply'} />
            <VStack>
              <Heading children={'Mission'} />
              <Text>
                To continue our development with state-of-the-art production
                facilities for serving the needs of our worldwide clients and
                create lasting contributions & consistent customer
                relationships.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </Box>
      <Box backgroundColor={'whitesmoke.200'} px={6} mt={20} pb={10}>
        <VStack>
          <Heading
            children={'Leading Auto Parts Manufacturing'}
            fontSize={'4xl'}
          />
          <Text
            textAlign={'center'}
            fontSize={'18px'}
            w={['400px', '600px', '900px', '1100px']}
            px={['10px', '60px', '100px', '180px']}
            justifyContent={'center'}
          >
            With over 18 years of manufacturing experience and unsurpassed
            knowledge through innovation and development, we pride ourselves to
            become a market leader in auto parts development and manufacturing.
          </Text>
          <Stack
            flexDir={['column', 'column', 'column', 'row']}
            maxW={'container.xl'}
            mt={10}
          >
            <Image src={img5} />
            <VStack gap={4}>
              <Box>
                <Heading
                  fontWeight={'500'}
                  children={'Extensive Industrial Unit'}
                  fontSize={20}
                />
                <Text>
                  Kaneri Group of Industries own 3 highly advanced manufacturing
                  units with comprehensive facilities to cater any need in
                  automobile industry. We have cast iron foundry and machine
                  shop having range of machineries including Sand Plant, Track
                  line, CNC Machine Shop with CNC turning Centers, Pillar Drill
                  Machine, Balancing Machine, Marking Machine, Milling Machine,
                  Packing machine, Surface Test Machine and the list goes on…
                </Text>
              </Box>
              <Box>
                <Heading
                  fontWeight={'500'}
                  children={'Extensive Industrial Unit'}
                  fontSize={20}
                />
                <Text>
                  Kaneri Group of Industries own 3 highly advanced manufacturing
                  units with comprehensive facilities to cater any need in
                  automobile industry. We have cast iron foundry and machine
                  shop having range of machineries including Sand Plant, Track
                  line, CNC Machine Shop with CNC turning Centers, Pillar Drill
                  Machine, Balancing Machine, Marking Machine, Milling Machine,
                  Packing machine, Surface Test Machine and the list goes on…
                </Text>
              </Box>
            </VStack>
          </Stack>
        </VStack>
      </Box>
      <Box maxW={'container.xl'} mx={'auto'}>
        <Stack
          // maxW={'container.xl'}
          w={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
          mx={'auto'}
          flexDir={['column', 'column', 'column', 'row']}
        >
          {' '}
          <Box
            w={['350px', '350px', '500px', '550px']}
            h={['450px', '450px', '350px', '350px']}
            position={'relative'}
          >
            <Image
              w={'100%'}
              h={'100%'}
              src={img6}
              objectPosition={'center'}
              objectFit={'cover'}
              position={'absolute'}
              top={0}
              left={0}
            />
            <Box
              position={'absolute'}
              top={0}
              left={0}
              w={'100%'}
              h={'100%'}
              bg={'rgba(0, 0, 0, 0.7)'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              padding={6}
            >
              <VStack w={'100%'} gap={4} alignItems={'flex-start'}>
                <Heading
                  color={'white'}
                  fontSize={'20px'}
                  fontWeight={'400'}
                  pb={3}
                >
                  Break Disc
                </Heading>
                <VStack alignItems={'flex-start'} lineHeight={'40px'}>
                  <Text
                    fontWeight={'200'}
                    fontSize={['36px', '36px', '36px', '46px']}
                    color={'white'}
                  >
                    State-of-The-ART
                  </Text>
                  <Text
                    fontWeight={'700'}
                    fontSize={['36px', '36px', '36px', '46px']}
                    color={'white'}
                  >
                    Balancing techniques
                  </Text>
                </VStack>
                <Text color={'white'} pt={3}>
                  For manufacturing range of engine components
                </Text>
                <Button
                  colorScheme={'blue'}
                  borderRadius={0}
                  variant={'solid'}
                  onClick={() => window.location.replace('/products')}
                >
                  Explore Products
                </Button>
              </VStack>
            </Box>
          </Box>
          <Box
            w={['350px', '350px', '500px', '550px']}
            h={['450px', '450px', '350px', '350px']}
            position={'relative'}
          >
            <Image
              w={'100%'}
              h={'100%'}
              src={img7}
              objectPosition={'center'}
              objectFit={'cover'}
              position={'absolute'}
              top={0}
              left={0}
            />
            <Box
              position={'absolute'}
              top={0}
              left={0}
              w={'100%'}
              h={'100%'}
              bg={'rgba(0, 0, 0, 0.7)'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              padding={6}
            >
              <VStack w={'100%'} gap={4} alignItems={'flex-start'}>
                <Heading
                  color={'white'}
                  fontSize={'20px'}
                  fontWeight={'400'}
                  pb={3}
                >
                  Break Disc
                </Heading>
                <VStack alignItems={'flex-start'} lineHeight={'40px'}>
                  <Text
                    fontWeight={'200'}
                    fontSize={['36px', '36px', '36px', '46px']}
                    color={'white'}
                  >
                    State-of-The-ART
                  </Text>
                  <Text
                    fontWeight={'700'}
                    fontSize={['36px', '36px', '36px', '46px']}
                    color={'white'}
                  >
                    Balancing techniques
                  </Text>
                </VStack>
                <Text color={'white'} pt={3}>
                  For manufacturing range of engine components
                </Text>
                <Button
                  colorScheme={'blue'}
                  borderRadius={0}
                  variant={'solid'}
                  onClick={() => window.location.replace('/products')}
                >
                  Explore Products
                </Button>
              </VStack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutUs;
