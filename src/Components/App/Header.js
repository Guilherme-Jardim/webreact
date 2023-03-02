import { Flex, Spacer, Box, IconButton, Icon, Image } from "@chakra-ui/react";
import { FaUser, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { ReactComponent as WindelHeader } from '../Assets/logoheader.svg';
import FullscreenButton from "../FullScreenButton/FullScreenButton";

const Header = () => {
    return (
        <Flex align="center" justify="space-between" px="4" py="2"
            w="100%"
        >
            <Box>
                <WindelHeader />
            </Box>
            <Spacer />
            <Box>
                <IconButton
                    aria-label="Fullscreen"
                    variant="ghost"
                    icon={<Icon as={FullscreenButton} />}
                />
                <IconButton
                    aria-label="Settings"
                    variant="ghost"
                    icon={<Icon as={FaCog} />}
                />
                <IconButton
                    aria-label="User"
                    variant="ghost"
                    icon={<Icon as={FaUser} />}
                />
                <IconButton
                    aria-label="Notifications"
                    variant="ghost"
                    icon={<Icon as={FaBell} />}
                />
                <IconButton
                    aria-label="Logout"
                    variant="ghost"
                    icon={<Icon as={FaSignOutAlt} />}
                />
            </Box>
        </Flex>
    );
};

export default Header;
