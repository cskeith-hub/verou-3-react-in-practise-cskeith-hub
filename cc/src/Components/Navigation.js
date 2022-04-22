import React from 'react'
import { Flex, Text, Square, Input } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'

function Navigation() {
  return (
<Flex color='Black'>
  <Square w='107px'>
  <Text>Brand</Text>
  </Square>
  <Square w='107px' h='80px'>
     <Input placeholder='   Search' />
  </Square>
  <Square w='107px'>
    <Menu>
  <MenuButton as={Button}>
    Menu
  </MenuButton>
    <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About Me</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>More</MenuItem>
    </MenuList>
  </Menu>
  </Square>
</Flex>
  )
}

export default Navigation