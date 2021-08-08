import React from 'react'
import { Flex } from '@chakra-ui/react';
import {Header} from 'components/header';
import {Notifications} from 'components/notifications';

interface Layout {
        children: JSX.Element
}

const Layout = ({children}: Layout) => (
    <Flex pos="absolute" w="100%" h="100%">
      <Flex justifyContent="space-between" width="100%" flexDir="column">
        <Header />
            {children}          
        <Notifications />
      </Flex>
    </Flex>
)

export default Layout
