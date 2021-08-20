import React from 'react';
import { useRouter } from 'next/router';
import {
  Flex,
  Image,
} from '@chakra-ui/react';
import NavItems from './NavItems';

export function Header() {
  const router = useRouter();

  return (
    <Flex
      width="100%"
      bg="brand.black"
      paddingX={4}
      paddingY={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        display={{
          base: 'none',
          md: 'block'
        }}
        maxH="28px"
        marginTop="4px"
        src='/assets/splash-logo.svg'
        onClick={e => {
          e.preventDefault();
          router.replace('/marketplace');
        }}
        cursor="pointer"
      />
      <Image
        display={{
          base: 'block',
          md: 'none'
        }}
        maxW="38px"
        src='/assets/header-logo.svg'
        onClick={e => {
          e.preventDefault();
          router.replace('/marketplace');
        }}
        cursor="pointer"
      />
      <NavItems />
    </Flex>
  );
}

export default Header;
