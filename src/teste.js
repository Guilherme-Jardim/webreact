

function useButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuVisibility = () => setIsMenuOpen(!isMenuOpen);

    return { isMenuOpen, handleMenuVisibility };
}

function useTextVisibility() {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [boxWidth, setBoxWidth] = useState(0);
    const boxRef = useRef(null);

    function handleTextVisibility() {
        setIsTextVisible(!isTextVisible);
        if (boxRef.current && !isTextVisible) {
            setBoxWidth(boxRef.current.offsetWidth);
        }
    }

    return { isTextVisible, handleTextVisibility, boxRef, boxWidth };
}


// ---------------------------------------------------------

function useMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuVisibility = () => setIsMenuOpen(!isMenuOpen);

    return { isMenuOpen, handleMenuVisibility };
}

function useText() {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [boxWidth, setBoxWidth] = useState(0);
    const boxRef = useRef(null);

    function handleTextVisibility() {
        setIsTextVisible(!isTextVisible);
        if (boxRef.current && !isTextVisible) {
            setBoxWidth(boxRef.current.offsetWidth);
        }
    }

    return { isTextVisible, handleTextVisibility, boxRef, boxWidth };
}

function useCustomHooks() {
    const menu = useMenu();
    const text = useText();

    return { ...menu, ...text };
}



//   -----------======================8888888888888888888444444444444444444444




import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@chakra-ui/icons';
import { Button, Flex, Box, Grid } from "@chakra-ui/react";
import { FiHome, FiUserPlus, FiBarChart, FiShoppingBag, FiEdit, FiDollarSign, FiShoppingCart } from 'react-icons/fi';
import { FaAngleRight, FaAngleLeft, FaAngleDown, FaUserPlus, FaAngleUp } from 'react-icons/fa';
import { Collapse } from "@chakra-ui/react";
import Header from './Header';
import { IoIosArrowForward } from 'react-icons/io';

const Dashboard = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const boxRef = useRef(null);

    const [boxWidth, setBoxWidth] = useState(0);

    const angleIcon = isTextVisible ? FaAngleLeft : FaAngleRight;

    const justifyContent = isTextVisible ? "end" : "start";

    const mlangleicon = isTextVisible ? "auto" : "auto";

    function isMenusOpen() {

        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const handleMenuVisibility = () => setIsMenuOpen(!isMenuOpen);

        return { isMenuOpen, handleMenuVisibility };
    }

    const [isCadastrosOpen, setIsCadastrosOpen] = useState(false);

    const handleCadastrosVisibility = () => setIsCadastrosOpen(!isCadastrosOpen);

    const [isPessoasOpen, setIsPessoasOpen] = useState(false);

    const handlePessoasVisibility = () => setIsPessoasOpen(!isPessoasOpen);

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
                    <Button justifyContent={justifyContent} ml={mlangleicon} leftIcon={<Icon as={angleIcon} />} onClick={handleTextVisibility} variant="ghost" />
                    <Button justifyContent="start" leftIcon={<FiHome />} variant="ghost">
                        {isTextVisible && (
                            <Box whiteSpace="nowrap" bg="gray.100">
                                Home
                            </Box>
                        )}
                    </Button>
                    <Button
                        justifyContent="start"
                        leftIcon={<Icon as={FiEdit} />}
                        variant="ghost"
                        onClick={handleCadastrosVisibility}
                    >
                        {isTextVisible && (
                            <>
                                <Box whiteSpace="nowrap" bg="gray.100">
                                    Cadastros
                                </Box>
                                {isMenuOpen.cadastros ? (
                                    <Icon as={FaAngleUp} ml="auto" />
                                ) : (
                                    <Icon as={FaAngleDown} ml="auto" />
                                )}
                            </>
                        )}
                    </Button>
                    <Collapse in={isCadastrosOpen} animateOpacity>
                        <Box pl="7" display="flex" flexDirection="column" width="100%">
                            <Button
                                variant="ghost"
                                rightIcon={<Icon as={FaAngleDown} />}
                                justifyContent="space-between"
                                textAlign="left"
                                onClick={handlePessoasVisibility}
                            >
                                Pessoas
                            </Button>

                            <Collapse in={isPessoasOpen} animateOpacity>
                                <Box display="flex" flexDirection="column" width="100%">
                                    <Button variant="ghost" justifyContent="start" leftIcon={<Icon as={IoIosArrowForward} />}>
                                        Clientes
                                    </Button>
                                    <Button variant="ghost" justifyContent="start" leftIcon={<Icon as={IoIosArrowForward} />}>
                                        Fornecedores
                                    </Button>
                                    <Button variant="ghost" justifyContent="start" leftIcon={<Icon as={IoIosArrowForward} />}>
                                        Funcion??rios
                                    </Button>
                                    <Button variant="ghost" justifyContent="start" leftIcon={<Icon as={IoIosArrowForward} />}>
                                        Transportadoras
                                    </Button>
                                </Box>

                            </Collapse>
                            <Button variant="ghost" rightIcon={<Icon as={FaAngleDown} />} justifyContent="space-between" textAlign="left">
                                Produtos
                            </Button>
                            <Button variant="ghost" rightIcon={<Icon as={FaAngleDown} />} justifyContent="space-between" textAlign="left">
                                Tributa????o
                            </Button>
                            <Button variant="ghost" rightIcon={<Icon as={FaAngleDown} />} justifyContent="space-between" textAlign="left">
                                Financeiro
                            </Button>
                            <Button variant="ghost" rightIcon={<Icon as={FaAngleDown} />} justifyContent="space-between" textAlign="left">
                                Outros
                            </Button>
                        </Box>
                    </Collapse>



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
                                Relat??rios
                            </Box>
                        )}
                    </Button>
                </Flex>
            </Flex >
        </Flex >
    );
};

export default Dashboard;
