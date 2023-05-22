import {
  Box,
  Button,
  Heading,
  Image,
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import MotionBox from '../motion/Box';

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        width={{ base: '100%', sm: '70%', md: '60%' }}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Button
            as={Link}
            href="/"
            backgroundColor={colorMode === 'light' ? 'gray.300' : 'teal.500'}
            size="sm"
          >
            Let&apos;s Head Back
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
