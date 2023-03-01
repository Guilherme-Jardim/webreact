import React, { useState } from 'react';
import { Flex, Box, Text, Input, InputGroup, InputLeftAddon, Button, Grid, GridItem, useBreakpointValue, Stack } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { Select } from "@chakra-ui/react";
import { ReactComponent as ImgRegister } from '../Assets/imgregister.svg';

const Register = () => {
    const [formData, setFormData] = useState({
        completeName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // substitua por sua lógica de envio de formulário
    };

    const optionstp = [
        { value: "fisica", label: "Física" },
        { value: "juridica", label: "Jurídica" },
        { value: "estrangeiro", label: "Estrangeiro" },
    ];

    const optionsrt = [
        { value: "simplesnacional", label: "Simples Nacional" },
        { value: "simplesnacional2", label: "Simples Nacional - excesso de sublimite da receita" },
        { value: "regimenormal", label: "Regime Normal" },
    ];

    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleSubmitCep = (event) => {
        event.preventDefault();
        console.log({ cep, street, number, complement, neighborhood, city, state });
        // Aqui você pode adicionar sua lógica de envio de formulário
    };

    const handleCepChange = (event) => {
        const cepValue = event.target.value;
        if (cepValue.length === 8) {
            fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
                .then((response) => response.json())
                .then((data) => {
                    setStreet(data.logradouro);
                    setComplement(data.complemento);
                    setNeighborhood(data.bairro);
                    // As linhas abaixo atualizam os valores dos campos city e state somente pela API
                    if (data.localidade !== '') {
                        setCity(data.localidade);
                    }
                    if (data.uf !== '') {
                        setState(data.uf);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        setCep(cepValue);
    };

    const hideOnBaseAbsolute = useBreakpointValue({ base: "none", md: "absolute" });


    return (

        <Flex justifyContent="center" alignItems="center">





            <Flex justifyContent="center" alignItems="center">


                <Box maxW="99%" w="100%" bg="white" boxShadow="md" borderRadius="md" p={8} border="1px solid" m="5" mb="1" mt="1"
                >

                    <Grid templateColumns={{ base: '1fr)', md: 'repeat(1fr 1.7fr)', lg: '1fr 1.7fr' }} gap="2rem 1rem" w="full">
                        <Box>


                            <Link                            
                                To='/'
                                textAlign="center"
                                style={{ textDecoration: "none" }}>
                                <Text
                                    bgGradient="linear(to-l, #f1ab29, #e93890)" bgClip="text"
                                    color="transparent"
                                    fontWeight="800"
                                    fontSize="4rem"
                                >
                                    Windel
                                </Text>
                            </Link>

                            <Text
                                textAlign="center"
                                bgGradient="linear(to-l, #f1ab29, #e93890)" bgClip="text"
                                color="transparent"
                                fontWeight="200"
                                fontSize="1.5rem"
                            >

                                Cadastre-se e teste o sistema gratuitamente por 7 dias!

                            </Text>
                            <ImgRegister />

                            <Text
                                textAlign="justify"
                            >

                                Seus dados serão utilizados apenas para disponibilização de acesso ao Sistema Windel, clique em Cadastrar para receber os dados de Acesso por e-mail e finalizar o seu cadastro.
                            </Text>

                        </Box>


                        <Box>



                            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}



                            <Box maxW="100%" w="100%" bg="white" p={1}>

                                <form onSubmit={handleSubmit}>
                                    <Text mb={1}>
                                        Documento
                                    </Text>
                                    <Flex
                                        boxShadow="md" borderRadius="md" border="1px solid" borderColor="gray.500" p="5px"
                                    >
                                        <InputGroup>
                                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="1.5rem" w="full">


                                                <Grid>
                                                    <InputLeftAddon children="CPF/CNPJ*" />
                                                    <Input type="text" name="firstName" value={formData.cpfcnpj} onChange={handleChange} />
                                                </Grid>


                                                <Grid>

                                                    <InputLeftAddon children="Razão Social*" />
                                                    <Input type="text" name="razaoSocial" value={formData.razaoSocial} onChange={handleChange} />
                                                </Grid>


                                                <Grid>

                                                    <InputLeftAddon children="Tipo Pessoa*" />
                                                    <Select defaultValue="">

                                                        <option value="" disabled hidden>
                                                            Selecione
                                                        </option>
                                                        {optionstp.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                </Grid>



                                                <Grid>

                                                    <InputLeftAddon children="Regime Tributário*" />
                                                    <Select defaultValue="">
                                                        <option value="" disabled hidden>
                                                            Selecione
                                                        </option>
                                                        {optionsrt.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                </Grid>

                                            </Grid>




                                        </InputGroup>
                                    </Flex>
                                </form>
                            </Box>




                            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}



                            <Box maxW="100%" w="100%" bg="white" p={1}>
                                <Text mb={1}>
                                    Informações Pessoais
                                </Text>
                                <form onSubmit={handleSubmit}>



                                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="1.5rem 1rem" boxShadow="md" borderRadius="md" border="1px solid" borderColor="gray.500" p="5px">

                                        <InputGroup>

                                            <GridItem w="full">
                                                <InputLeftAddon children="Nome Completo*" />
                                                <Input type="text" placeholder="Nome Completo" name="completeName" value={formData.completeName} onChange={handleChange} />
                                            </GridItem>

                                        </InputGroup>

                                        <InputGroup>


                                            <GridItem w="full">

                                                <InputLeftAddon children="E-mail*" />
                                                <Input type="email" placeholder="Seu e-mail" name="email" value={formData.email} onChange={handleChange} />
                                            </GridItem>

                                        </InputGroup>

                                        <InputGroup>


                                            <GridItem w="full">

                                                <InputLeftAddon children="Telefone*" />
                                                <InputMask mask="(99) 99999-9999" value={formData.phone} onChange={handleChange} >
                                                    {(inputProps) => <Input type="tel" placeholder="Seu telefone" name="phone" {...inputProps} />}
                                                </InputMask>
                                            </GridItem>

                                        </InputGroup>




                                    </Grid>





                                </form>
                            </Box>


                            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}


                            <Box maxW="100%" w="100%" bg="white" p={1}>
                                <Text mb={1}>
                                    Endereço
                                </Text>



                                <form
                                    onSubmit={handleSubmitCep}
                                >
                                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="1.5rem" boxShadow="md" borderRadius="md" border="1px solid" borderColor="gray.500" p="5px">
                                        <InputGroup>
                                            <GridItem position={hideOnBaseAbsolute} w="full">
                                                <InputLeftAddon children="CEP*" />
                                                <Input type="number" value={cep} onChange={handleCepChange} />
                                                <Link
                                                    style={{ textDecoration: "none" }}
                                                    href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                                    isExternal
                                                >
                                                    Não sei meu cep
                                                </Link>
                                            </GridItem>
                                        </InputGroup>

                                        <InputGroup>
                                            <GridItem w="full">
                                                <InputLeftAddon children="Rua" />
                                                <Input type="text" value={street} readOnly />
                                            </GridItem>
                                        </InputGroup>

                                        <InputGroup>
                                            <GridItem w="full">
                                                <InputLeftAddon children="Número" />
                                                <Input type="text" value={number} onChange={(event) => setNumber(event.target.value)} />
                                            </GridItem>
                                        </InputGroup>

                                        <InputGroup>
                                            <GridItem w="full">
                                                <InputLeftAddon children="Complemento" />
                                                <Input type="text" value={complement} onChange={(event) => setComplement(event.target.value)} />
                                            </GridItem>
                                        </InputGroup>

                                        <InputGroup>
                                            <GridItem w="full">
                                                <InputLeftAddon children="Bairro" />
                                                <Input type="text" value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)} />
                                            </GridItem>
                                        </InputGroup>

                                        <InputGroup>
                                            <GridItem w="full">
                                                <InputLeftAddon children="Cidade" />
                                                <Input placeholder="Preencha o CEP!" type="text" value={city} readOnly />
                                            </GridItem>
                                        </InputGroup>

                                        <InputGroup>
                                            <GridItem w="full">
                                                <InputLeftAddon children="Estado" />
                                                <Input placeholder="Preencha o CEP!" type="text" value={state} readOnly />
                                            </GridItem>
                                        </InputGroup>
                                    </Grid>

                                </form>

                            </Box>



                            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                            <Box align="end">
                                <Button type="submit" colorScheme="blue" size="lg" fontSize="md" fontWeight="bold" width="30%" >
                                    Cadastrar
                                </Button>
                            </Box>

                            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                        </Box>

                    </Grid>




                </Box>


            </Flex>










        </Flex >

















    );
};

export default Register;
