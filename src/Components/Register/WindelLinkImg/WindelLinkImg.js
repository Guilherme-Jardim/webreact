import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { ReactComponent as ImgRegister } from '../../Assets/imgregister.svg';

const WindelLinkImg = () => {
    return (
        <Box>

            <Link to='/'
                style={{ textDecoration: "none" }}>
                <Text
                    textAlign="center"
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
            <Box
                align="center"
            >
                <ImgRegister />
            </Box>

        </Box>
    )
}

export default WindelLinkImg