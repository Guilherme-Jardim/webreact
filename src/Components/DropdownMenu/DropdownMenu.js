import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Icon, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

function DropdownMenu() {
  return (
    <Menu>
      <MenuButton rightIcon={<ChevronRightIcon />} fontWeight="bold">
        Menu
      </MenuButton>
      <MenuList>
        <MenuItem icon={<Icon as={ChevronRightIcon} />} fontWeight="bold">
          <Icon as={ChevronRightIcon} mr="2" /> Item 1
          <Text ml="auto" mr="2">atalho</Text>
        </MenuItem>
        <MenuItem icon={<Icon as={ChevronRightIcon} />} fontWeight="bold">
          <Icon as={ChevronRightIcon} mr="2" /> Item 2
          <Text ml="auto" mr="2">atalho</Text>
        </MenuItem>
        <MenuItem icon={<Icon as={ChevronRightIcon} />} fontWeight="bold">
          <Icon as={ChevronRightIcon} mr="2" /> Item 3
          <Text ml="auto" mr="2">atalho</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
