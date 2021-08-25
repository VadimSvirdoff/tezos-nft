import { useRouter } from 'next/router';
import {
    Flex,
    Image,
    Text,
    Menu,
    MenuButton,
    MenuList,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'rtk';
import { disconnectWallet } from 'rtk/async/wallet';
import { MinterButton } from 'components/common';
import WalletInfo from 'components/header/walletInfo/WalletInfo';

export const WalletMenu = () =>{ 
    const router = useRouter();
    const system = useSelector(s => s.system);
    const dispatch = useDispatch();

    return (
    <Menu placement="bottom-end" offset={[4, 24]}>
        <MenuButton
            padding={2}
            _hover={{
                textDecoration: 'none',
                background: '#2D3748',
                color: '#EDF2F7'
            }}
        >
            <Image
                src="/assets/wallet.svg"
                width={4}
                height="auto"
                style={{ filter: 'invert(1)' }}
            />
        </MenuButton>
        <MenuList color="brand.black">
            <Flex flexDir="column" px={4} py={2}>
                <Text fontSize={16} fontWeight="600">
                    Network: {system.config.network}
                </Text>
                <WalletInfo tzPublicKey={system.tzPublicKey} />
                <MinterButton
                    alignSelf="flex-start"
                    variant="cancelAction"
                    onClick={async () => {
                        await dispatch(disconnectWallet());
                        router.replace('/');
                    }}
                >
                    Disconnect
                </MinterButton>
            </Flex>
        </MenuList>
    </Menu>
)}