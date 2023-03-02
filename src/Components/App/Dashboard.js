import React, { useState } from 'react'
import { Icon } from '@chakra-ui/icons';
import FullscreenButton from '../FullScreenButton/FullScreenButton'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import Header from './Header'
import { Flex, Text, HStack, VStack, Spacer, Box, IconButton, Image, Menu, MenuButton, MenuList, MenuItem, Grid } from "@chakra-ui/react";
import { FiHome, FiUserPlus, FiDollarSign, FiShoppingCart, FiPackage, FiFileText } from 'react-icons/fi';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';


const Dashboard = () => {

    const [isTextVisible, setIsTextVisible] = useState(false);

    function handleTextVisibility() {
        setIsTextVisible(!isTextVisible);
    }

    return (
        <Flex direction="column">
            <Flex w="100%">
                <Header />
            </Flex>
            <Box maxW="200px" h="100%" bg="gray.100">
                <Flex direction="column" h="100%" justify="center" align="center">
                    <Flex align="center" p="4">
                        <Icon as={FiHome} mr="2" />
                        {isTextVisible && <Text>Home</Text>}
                        <Icon as={isTextVisible ? MdVisibilityOff : MdVisibility} ml="2" onClick={handleTextVisibility} />
                    </Flex>
                    <Flex align="center" p="4">
                        <Icon as={FiUserPlus} mr="2" />
                        {isTextVisible && <Text>Cadastros</Text>}
                        <Icon as={isTextVisible ? MdVisibilityOff : MdVisibility} ml="2" onClick={handleTextVisibility} />
                    </Flex>
                    <Flex align="center" p="4">
                        <Icon as={FiDollarSign} mr="2" />
                        {isTextVisible && <Text>Financeiro</Text>}
                        <Icon as={isTextVisible ? MdVisibilityOff : MdVisibility} ml="2" onClick={handleTextVisibility} />
                    </Flex>
                    <Flex align="center" p="4">
                        <Icon as={FiShoppingCart} mr="2" />
                        {isTextVisible && <Text>Compras</Text>}
                        <Icon as={isTextVisible ? MdVisibilityOff : MdVisibility} ml="2" onClick={handleTextVisibility} />
                    </Flex>
                    <Flex align="center" p="4">
                        <Icon as={FiPackage} mr="2" />
                        {isTextVisible && <Text>Vendas</Text>}
                        <Icon as={isTextVisible ? MdVisibilityOff : MdVisibility} ml="2" onClick={handleTextVisibility} />
                    </Flex>
                    <Flex align="center" p="4">
                        <Icon as={FiFileText} mr="2" />
                        {isTextVisible && <Text>Relatórios</Text>}
                        <Icon as={isTextVisible ? MdVisibilityOff : MdVisibility} ml="2" onClick={handleTextVisibility} />
                    </Flex>
                </Flex>
            </Box>
        </Flex>

    )
}

export default Dashboard

// Home, Cadastros, Financeiro, Compras, Vendas, Relatórios