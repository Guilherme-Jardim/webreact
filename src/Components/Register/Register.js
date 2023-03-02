import { Flex, Box, Button, Grid } from '@chakra-ui/react';
import WindelLinkImg from './WindelLinkImg/WindelLinkImg';
import AcceptTerms from './AcceptTerms/AcceptTerms';
import Document from './Document/Document';
import PersonalInformation from './PersonalInformation/PersonalInformation';
import Address from './Address/Address';

const Register = () => {

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    maxW="99%"
                    w="100%"
                    bg="white"
                    boxShadow="md"
                    borderRadius="md"
                    p={3}
                    border="1px solid"
                    m="5"
                    mb="1"
                    mt="1"
                >
                    <Grid
                        templateColumns={{ base: '1fr)', md: 'repeat(1fr 1.7fr)', lg: '1fr 1.7fr' }}
                        gap="2rem 0.3rem"
                        w="full"
                    >
                        <Box>
                            <WindelLinkImg />
                            <AcceptTerms />
                        </Box>
                        <Box>
                            <Document />
                            <PersonalInformation />
                            <Address />
                            <Box
                                align="end"
                            >
                                <Button
                                    type="submit"
                                    colorScheme="blue"
                                    size="lg"
                                    fontSize="md"
                                    fontWeight="bold"
                                    width="30%"
                                    mt={1}
                                >
                                    Cadastrar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Flex>
        </Flex >
    );
};

export default Register;
