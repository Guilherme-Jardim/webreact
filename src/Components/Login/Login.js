import React from 'react';
import { ReactComponent as Windel } from '../Assets/logologin.svg'
import Home from '../Home';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { Flex } from '@chakra-ui/react';

const Login = () => {
  return (

    <div>
      <Header>
        <Flex pos="fixed" top="1rem" right="1rem" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link href='/'>
              <button
                variant="ghost"
                colorScheme="teat"
                aria-label='Home'
                my='5'
                w='100%' >
                Home
              </button>
            </Link>

          </Flex>
        </Flex>
      </Header>


      <Windel />
      <label type='text'>Informe seu e-mail</label>
      <input type='email'></input>
      <label type='text'>Informe sua senha</label>
      <input type='password'></input>
      <nav>
        <Link to='/Home'>Acessar</Link>
        <Link to='/Esqueceu'>Esqueceu sua senha?</Link>
        <Link to='/Cadastro'>Cadastre-se e teste grátis por 7 dias!</Link>
      </nav>
    </div >


  )
}

export default Login