import React, { useState } from 'react';
import { Box, Text, Input, InputGroup, InputLeftAddon, Grid, GridItem } from '@chakra-ui/react';
import InputMask from 'react-input-mask';


const PersonalInformation = () => {
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

    return (
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
    )
}

export default PersonalInformation