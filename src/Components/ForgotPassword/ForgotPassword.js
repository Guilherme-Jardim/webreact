import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { Flex, Box, Text, Input, Button } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

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
    <div>
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Box maxW="500px" w="100%" bg="white" boxShadow="md" borderRadius="md" p={3}>
          <Text mb={4} fontSize="3xl" fontWeight="bold">
            Recuperação de senha
          </Text>
          <form onSubmit={handleSubmit}>
            <Box mb={4}>
              <Text mb={2}>Informe o e-mail associado à sua conta</Text>
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
      </Flex>
    </div>
  )
}

export default ForgotPassword;
