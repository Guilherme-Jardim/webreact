import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@chakra-ui/icons';
import { Button, Flex, Box } from "@chakra-ui/react";
import { FiHome, FiUserPlus, FiDollarSign, FiShoppingCart } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';

import Header from './Header';

const Dashboard = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const boxRef = useRef(null);

    useEffect(() => {
        if (isTextVisible && boxRef.current) {
            boxRef.current.style.width = 'auto';
            const boxWidth = boxRef.current.getBoundingClientRect().width;
            boxRef.current.style.width = `${boxWidth}px`;
        }
    }, [isTextVisible]);

    function handleTextVisibility() {
        setIsTextVisible(!isTextVisible);
    }

    return (
        <Flex direction="column" h="100vh">
            <Flex w="100%">
                <Header />
            </Flex>
            <Box width="fit-content" flex="1" bg="gray.100">
                <Flex direction="column" h="100%" justify="top" align="center">
                    <Flex direction="column" mt="8">
                        <Button variant="unstyled" _hover={{ bg: 'gray.300' }} onClick={handleTextVisibility}>
                            <Icon justify="center" align="center" as={FaAngleRight} />
                        </Button>
                        <Button variant="unstyled" _hover={{ bg: 'gray.300' }} alignItems="center" onClick={handleTextVisibility}>
                            <Icon as={FiHome} />
                            {isTextVisible && (
                                <Box ref={boxRef} left="30px" top="50%" transform="translateY(-50%)" whiteSpace="nowrap">
                                    Home
                                </Box>
                            )}
                        </Button>
                        <Button variant="unstyled" _hover={{ bg: 'gray.300' }} alignItems="center" onClick={handleTextVisibility}>
                            <Icon as={FiUserPlus} />
                            {isTextVisible && (
                                <Box ref={boxRef} left="30px" top="50%" transform="translateY(-50%)" whiteSpace="nowrap">
                                    Add User
                                </Box>
                            )}
                        </Button>
                        <Button variant="unstyled" _hover={{ bg: 'gray.300' }} alignItems="center" onClick={handleTextVisibility}>
                            <Icon as={FiDollarSign} />
                            {isTextVisible && (
                                <Box ref={boxRef} left="30px" top="50%" transform="translateY(-50%)" whiteSpace="nowrap">
                                    Payments
                                </Box>
                            )}
                        </Button>
                        <Button variant="unstyled" _hover={{ bg: 'gray.300' }} alignItems="center" onClick={handleTextVisibility}gu>

                            <Icon as={FiShoppingCart} />
                            {isTextVisible && (
                                <Box ref={boxRef} left="30px" top="50%" transform="translateY(-50%)" whiteSpace="nowrap">
                                    Shop
                                </Box>
                            )}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Dashboard;
