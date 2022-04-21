import React, { useState, useEffect } from 'react';
import {
  Flex,
  Button,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {

  const Alert = async() => {
    alert("Praktikum");
  };

  return (
    <Flex>
      <Flex mx="2em" my="1em" align="center">
        {/* Desktop */}
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <Text fontSize="md" fontWeight={600} py={2} mx={5} w="100%">
            SILabSurvey
          </Text>
          <Menu isLazy>
            <MenuButton as={Button} variant="ghost" w="100%">
              Layanan
            </MenuButton>
            <Portal>
              <MenuList>
                <MenuItem onClick={Alert}>Praktikum</MenuItem>
                <MenuItem>Peminjaman</MenuItem>
                <MenuItem>Ujian</MenuItem>
                <MenuItem>Menu 4</MenuItem>
                <MenuItem>Menu 5</MenuItem>
              </MenuList>
            </Portal>
          </Menu>

          <Menu isLazy>
            <MenuButton as={Button} variant="ghost" w="100%">
              Layanan
            </MenuButton>
            <Portal>
              <MenuList>
                <MenuGroup title='Praktikum'>
                      <MenuItem>SISDAL</MenuItem>
                      <MenuItem>PDAS</MenuItem>
                </MenuGroup>
                <MenuDivider/>
                <MenuItem>Peminjaman</MenuItem>
                <MenuItem>Ujian</MenuItem>
                <MenuItem>Menu 4</MenuItem>
                <MenuItem>Menu 5</MenuItem>
              </MenuList>
            </Portal>
          </Menu>

          <Link>
            <Button variant="ghost" w="100%">
              Stocks
            </Button>
          </Link>

          <Link>
            <Button
              variant="outline"
              colorScheme="teal"
              w="100%"
            >
              Log Out
            </Button>
          </Link>
        </Flex>
      </Flex>      
    </Flex>
  );
};

export default Navbar;
