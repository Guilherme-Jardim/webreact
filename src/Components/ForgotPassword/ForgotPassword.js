import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { Flex, Box, Text, Input, Button } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { ReactComponent as Windel } from '../Assets/logologin.svg';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email); // exibe o e-mail digitado pelo usuário no console
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Box
        maxW="500px"
        w="100%"
        bg="white"
        boxShadow="md"
        borderRadius="md"
        p={3}
      >
        <Flex justifyContent="center">
          <Windel />
        </Flex>
        <Box
          maxW="500px"
          w="100%"
          bg="white"
          boxShadow="md"
          borderRadius="md"
          p={3}
          align="center"
          textAlign="center"
        >
          <Text mb={4} fontSize="3xl" fontWeight="bold">
            Recuperação de senha
          </Text>
          <form onSubmit={handleSubmit}>
            <Box mb={4}>
              <Text mb={2}>Informe abaixo o seu e-mail que enviaremos o link para reset de senha. </Text>
              <Input type="email" placeholder="Seu e-mail" value={email} onChange={handleEmailChange} />
            </Box>
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md" fontWeight="bold" mb={4} width="100%">
              Enviar
            </Button>
          </form>
          <Flex mt={4}>
            <Link to="/">
              <p
                style={{ display: "flex", alignItems: "center" }}
              >
                <Icon as={FaArrowLeft} mr={2} />
                Voltar para o login
              </p>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex >
  )
}

export default ForgotPassword;
