import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'rtk';
import {
  Box,
  Flex,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure
} from '@chakra-ui/react';
import { Menu as HamburgerIcon } from 'react-feather';
import { connectWallet, disconnectWallet } from 'rtk/async/wallet';
import { MinterButton } from 'components/common';
import MobileHeaderLink from "../MobileHeaderLink";

const MobileNavItems = () => {
    const system = useSelector(s => s.system);
    const dispatch = useDispatch();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);

    return (
        <Flex
        flex="1"
        justify="flex-end"
        display={{
          base: 'flex',
          md: 'none'
        }}
      >
        <Box
          color="brand.lightGray"
          ref={btnRef}
          cursor="pointer"
          onClick={onOpen}
        >
          <HamburgerIcon />
        </Box>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody mt={12}>
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Flex flexDir="column">
                    <MobileHeaderLink to="/marketplace" onClick={onClose}>
                      Marketplace
                    </MobileHeaderLink>
                    <MobileHeaderLink to="/collections" onClick={onClose}>
                      Collections
                    </MobileHeaderLink>
                    {system.status === 'WalletConnected' ? (
                      <MobileHeaderLink to="/create" onClick={onClose}>
                        New Asset
                      </MobileHeaderLink>
                    ) : null}
                  </Flex>
                  {system.status === 'WalletConnected' ? (
                    <MinterButton
                      variant="cancelAction"
                      onClick={async () => {
                        await dispatch(disconnectWallet());
                        router.replace('/');
                      }}
                      mb={4}
                    >
                      Disconnect Wallet
                    </MinterButton>
                  ) : (
                    <MinterButton
                      variant="secondaryAction"
                      onClick={e => {
                        e.preventDefault();
                        dispatch(connectWallet());
                      }}
                      mb={4}
                    >
                      Connect Wallet
                      <Image
                        src="/assets/wallet.svg"
                        width="auto"
                        height="40%"
                        paddingLeft={3}
                      />
                    </MinterButton>
                  )}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    )
}

export default MobileNavItems
