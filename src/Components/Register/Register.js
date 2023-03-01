import React, { useState } from 'react';
import { Flex, Box, Text, Input, InputGroup, InputLeftAddon, Button, Grid, GridItem, useBreakpointValue, Stack } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { Select } from "@chakra-ui/react";


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
                    setCity(data.localidade);
                    setState(data.uf);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        setCep(cepValue);
    };

    const hideOnBaseAbsolute = useBreakpointValue({ base: "none", md: "absolute" });

    const hideOnBaseRelative = useBreakpointValue({ base: "none", md: "absolute" });

    return (
        <Flex justifyContent="center" alignItems="center">
            <Box maxW="1000px" w="100%" bg="white" boxShadow="md" borderRadius="md" p={3}>
                <Text mb={4} fontSize="3xl" fontWeight="bold">
                    Cadastro
                </Text>





                {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}


                <Box maxW="1000px" w="100%" bg="white" boxShadow="md" borderRadius="md" p={3}>

                    <form onSubmit={handleSubmit}>
                        <Text mb={4} fontSize="3xl" fontWeight="bold">
                            Documento
                        </Text>
                        <Flex mb={4}>
                            <InputGroup>
                                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="2rem 1rem" w="full">


                                    <Grid >
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


                <Box maxW="1000px" w="100%" bg="white" boxShadow="md" borderRadius="md" p={3}>
                    <Text mb={4} fontSize="3xl" fontWeight="bold">
                        Informações Pessoais
                    </Text>
                    <form onSubmit={handleSubmit}>
                        ssssssssssssssssssssssssssss


                        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="2rem 1rem" mb={4}>

                            <InputGroup>

                                <GridItem w="full">
                                    <InputLeftAddon children="Nome Completo" />
                                    <Input type="text" placeholder="Nome Completo" name="completeName" value={formData.completeName} onChange={handleChange} />
                                </GridItem>

                            </InputGroup>

                            <InputGroup>


                                <GridItem w="full">

                                    <InputLeftAddon children="E-mail" />
                                    <Input type="email" placeholder="Seu e-mail" name="email" value={formData.email} onChange={handleChange} />
                                </GridItem>

                            </InputGroup>

                            <InputGroup>


                                <GridItem w="full">

                                    <InputLeftAddon children="Telefone" />
                                    <InputMask mask="(99) 99999-9999" value={formData.phone} onChange={handleChange} >
                                        {(inputProps) => <Input type="tel" placeholder="Seu telefone" name="phone" {...inputProps} />}
                                    </InputMask>
                                </GridItem>

                            </InputGroup>

                            <InputGroup>


                                <GridItem w="full">

                                    <InputLeftAddon children="Senha" />
                                    <Input type="password" placeholder="Sua senha" name="password" value={formData.password} onChange={handleChange} />
                                </GridItem>

                            </InputGroup>

                            <InputGroup>


                                <GridItem w="full">
                                    <InputLeftAddon children="Confirmar senha" />
                                    <Input type="password" placeholder="Confirme sua senha" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                                </GridItem>

                            </InputGroup>

                        </Grid>





                    </form>
                </Box>


                {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}


                <Box maxW="1600px" w="100%" bg="white" boxShadow="md" borderRadius="md" p={3}>
                    <Text mb={4} fontSize="3xl" fontWeight="bold">
                        Endereço
                    </Text>



                    <form
                        onSubmit={handleSubmitCep}
                        mb={4}
                    >
                        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="2rem 1rem">
                            <InputGroup>
                                <GridItem position={hideOnBaseAbsolute} w="full">
                                    <InputLeftAddon children="CEP" />
                                    <Input type="number" value={cep} onChange={handleCepChange} />
                                    <Link position={hideOnBaseRelative} href="https://buscacepinter.correios.com.br/app/endereco/index.php" isExternal>
                                        Não sei meu cep
                                    </Link>
                                </GridItem>
                            </InputGroup>

                            <InputGroup>
                                <GridItem w="full">
                                    <InputLeftAddon children="Rua" />
                                    <Input type="text" value={street} onChange={(event) => setStreet(event.target.value)} />
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
                                    <Input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
                                </GridItem>
                            </InputGroup>

                            <InputGroup>
                                <GridItem w="full">
                                    <InputLeftAddon children="Estado" />
                                    <Input type="text" value={state} onChange={(event) => setState(event.target.value)} />
                                </GridItem>
                            </InputGroup>
                        </Grid>

                    </form>

                </Box>



                {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                <Button type="submit" colorScheme="blue" size="lg" fontSize="md" fontWeight="bold" mb={4} width="100%">
                    Cadastrar
                </Button>

                <Box>
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

                {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}


            </Box>













        </Flex >

















    );
};

export default Register;
