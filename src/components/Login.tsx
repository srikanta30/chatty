import { Button, Divider, Flex, Heading, Text, Center, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { auth, provider } from '../../firebaseConfig'
import { DarkModeSwitch } from './DarkModeSwitch'
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.100', dark: 'gray.800' }
  const bgLogin = { light: 'white', dark: 'gray.700' }
  const signIn = () => {
    isMobile
      ? signInWithRedirect(auth, provider).catch(alert)
      : signInWithPopup(auth, provider).catch(alert)
  }
  
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={bgColor[colorMode]}
    >
      <Flex shadow={colorMode === 'light' ? "lg" : "dark-lg"} minHeight="400px" h={isMobile ? "100vh" : "70vh"} w="auto" direction={isMobile ? "column" : "row"} bg="grey">
        <Flex
          direction="column"
          paddingY="20px"
          paddingX="40px"
          bg={bgLogin[colorMode]}
          justify="center"
          align="center"
          w="100%"
          h="100%"
        >
          <Heading
            position="relative"
            bottom={isMobile ? "7%" : "14%"}
            size='lg'
            textAlign="center"
          >
            Hey, Welcome to Chat App! 👋
          </Heading>
          <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={signIn}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        </Flex>
      </Flex>
      <DarkModeSwitch />
    </Flex>
  )
}
