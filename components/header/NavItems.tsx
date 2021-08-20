import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { Plus, Menu as HamburgerIcon } from 'react-feather';
import { RiStore2Line } from 'react-icons/ri';
import { MdCollections } from 'react-icons/md';
import { useSelector, useDispatch } from 'rtk';
import { connectWallet, disconnectWallet } from 'rtk/async/wallet';
import { MinterButton } from 'components/common';
import MobileHeaderLink from "./MobileHeaderLink";
import DesktopHeaderLink from "./DesktopHeaderLink";
import WalletDisplay from './WalletDisplay';

function NavItems() {
    const system = useSelector(s => s.system);
    const dispatch = useDispatch();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);
  
    return (
      <>
        {/* Mobile */}
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
        {/* Desktop */}
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
      </>
    );
  }

  export default NavItems