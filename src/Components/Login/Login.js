import React, { useState } from 'react';
import { ReactComponent as Windel } from '../Assets/logologin.svg';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Input, InputGroup, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react';
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Box maxW="500px" w="100%" bg="white" boxShadow="md" borderRadius="md" p={3}>
        <Flex justifyContent="center">
          <Windel />
        </Flex>
        <Box mb={4}>
          <Text mb={2}>Informe seu e-mail</Text>
          <Input type="email" placeholder="Seu e-mail" />
        </Box>
        <Box mb={4}>
          <Text mb={2}>Informe sua senha</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<HiOutlineLockClosed />} />
            <Input type={showPassword ? 'text' : 'password'} placeholder="Sua senha" />
            <InputRightElement>
              <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility}>
                {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Link to="/dashboard">
          <Button colorScheme="blue" size="lg" fontSize="md" fontWeight="bold" mb={4} width="100%">Acessar</Button>
        </Link>
        <Flex
          gap="10px"
          justifyContent="space-between"
        >
          <p>
            <Link to="/forgot-password" mr={4}>Esqueceu sua senha?</Link>
          </p>
          <p>
            <Link to="/register">Cadastre-se e teste grátis por 7 dias!</Link>
          </p>
        </Flex>
      </Box>
    </Flex>



  )
}



export default Login;
