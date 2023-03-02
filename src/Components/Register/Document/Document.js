import React, { useState } from 'react';
import { Flex, Box, Text, Input, InputGroup, InputLeftAddon, Grid, Select } from '@chakra-ui/react';

const Document = () => {
    const [formData, setFormData] = useState({
        completeName: '',
        email: '',
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

    return (
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

    )
}

export default Document