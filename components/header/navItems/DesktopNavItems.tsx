import React from 'react';
import { useSelector } from 'rtk';
import {
    Box,
    Flex,
    Text,
} from '@chakra-ui/react';
import { Plus } from 'react-feather';
import { RiStore2Line } from 'react-icons/ri';
import { MdCollections } from 'react-icons/md';
import DesktopHeaderLink from "../DesktopHeaderLink";
import WalletDisplay from '../WalletDisplay';


const DesktopNavItems = () => {
    const system = useSelector(s => s.system);


    return (
        <Flex
            flex="1"
            justify="flex-end"
            display={{
                base: 'none',
                md: 'flex'
            }}
        >
            <DesktopHeaderLink to="/marketplace">
                <Box color="brand.turquoise">
                    <RiStore2Line size={16} />
                </Box>
                <Text ml={2}>Marketplace</Text>
            </DesktopHeaderLink>
            {system.status === 'WalletConnected' ? (
                <>
                    <DesktopHeaderLink to="/collections">
                        <Box color="brand.turquoise">
                            <MdCollections size={16} />
                        </Box>
                        <Text ml={2}>Collections</Text>
                    </DesktopHeaderLink>
                    <DesktopHeaderLink to="/create">
                        <Box color="brand.blue">
                            <Plus size={16} strokeWidth="3" />
                        </Box>
                        <Text ml={2}>New Asset</Text>
                    </DesktopHeaderLink>
                </>
            ) : null}
            <Flex
                alignItems="center"
                color="brand.gray"
                paddingLeft={4}
                marginLeft={4}
                borderLeft="2px solid"
                borderColor="brand.darkGray"
            >
                <WalletDisplay />
            </Flex>
        </Flex>
    )
}

export default DesktopNavItems
