import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@chakra-ui/icons';
import { Button, Flex, Box, Grid } from "@chakra-ui/react";
import { FiHome, FiUserPlus, FiBarChart, FiShoppingBag, FiEdit, FiDollarSign, FiShoppingCart } from 'react-icons/fi';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import Header from './Header';

const Dashboard = () => {
    const [isTextVisible, setIsTextVisible] = useState(false)
    const boxRef = useRef(null)
    const [boxWidth, setBoxWidth] = useState(0)
    const angleIcon = isTextVisible ? FaAngleLeft : FaAngleRight;
    const justifyContent = isTextVisible ? "end" : "start";

    function handleTextVisibility() {
        setIsTextVisible(!isTextVisible)
        if (boxRef.current && !isTextVisible) {
            setBoxWidth(boxRef.current.offsetWidth)
        }
    }

    return (
        <Flex direction="column" h="100vh">
            <Flex w="100%">
                <Header />
            </Flex>
            <Flex
                width="fit-content"
                direction="column"
                h="100%"
                bg="gray.100"
            >
                <Flex direction="column" bg="gray.100">
                    <Button justifyContent={justifyContent} leftIcon={<Icon as={angleIcon} />} onClick={handleTextVisibility} variant="ghost" />
                    <Button justifyContent="start" leftIcon={<FiHome />} variant="ghost">
                        {isTextVisible && (
                            <Box whiteSpace="nowrap" bg="gray.100">
                                Home
                            </Box>
                        )}
                    </Button>
                    <Button justifyContent="start" leftIcon={<FiEdit />} variant="ghost">
                        {isTextVisible && (
                            <Box whiteSpace="nowrap" bg="gray.100">
                                Cadastros
                            </Box>
                        )}
                    </Button>
                    <Button justifyContent="start" leftIcon={<FiDollarSign />} variant="ghost">
                        {isTextVisible && (
                            <Box whiteSpace="nowrap" bg="gray.100">
                                Financeiro
                            </Box>
                        )}
                    </Button>
                    <Button justifyContent="start" leftIcon={<FiShoppingCart />} variant="ghost">
                        {isTextVisible && (
                            <Box whiteSpace="nowrap" bg="gray.100">
                                Compras
                            </Box>
                        )}
                    </Button>
                    <Button justifyContent="start" leftIcon={<FiShoppingBag />} variant="ghost">
                        {isTextVisible && (
                            <Box whiteSpace="nowrap" bg="gray.100">
                                Vendas
                            </Box>
                        )}
                    </Button>

                    <Button justifyContent="start" leftIcon={<FiBarChart />} variant="ghost">
                        {isTextVisible && (
                            <Box whiteSpace="nowrap" bg="gray.100">
                                Relatórios
                            </Box>
                        )}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
