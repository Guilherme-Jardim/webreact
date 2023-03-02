import React, { useState } from 'react';
import { Box, Text, Input, InputGroup, InputLeftAddon, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';

const Address = () => {
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

                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} >
                                Não sei meu cep
                            </a>

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
    )
}

export default Address