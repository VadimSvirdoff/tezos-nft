import React from 'react';
import { Token } from 'rtk/slices/collections';
import { useRouter } from 'next/router';
import { IpfsGatewayConfig } from 'lib/util/ipfs';
import {
  Box,
  Flex,
  Text,
  Heading
} from '@chakra-ui/react';
import { MinterButton } from 'components/common';
import { TokenMedia } from 'components/tokenMedia';

interface FeaturedTokenProps extends Token {
  config: IpfsGatewayConfig;
}

export default function FeaturedToken(props: FeaturedTokenProps) {
  const router = useRouter();
  return (
    <Flex flexDir="row" flexWrap="wrap" mb={8} width="100%" justifyContent="center">
      <Flex maxHeight={['45vh', '65vh']} justifyContent="center" width={['85vw', '65vw', '45vw']}>
        <TokenMedia
          maxW="100%"
          maxH="50vh"
          objectFit="scale-down"
          class="featured"
          {...props}
        />
      </Flex>
      <Box marginLeft="0 !important">
        <Flex flexDir="column" h="100%" w={['100%', '35vw']} justifyContent="center" alignItems="center">
          <Heading size="md" mt={4} fontSize="2.5rem">
            {props.title}
          </Heading>
          <br/>
          <Text fontSize="lg">
            Current Price:{' '}
            <Text as="span" fontWeight="600">
              {props.sale?.price} <img src='/assets/tezos-sym.svg' alt="" width={10} height="auto" style={{ display: 'inline-block' }} />
              </Text>
          </Text>
          <br/>
          <MinterButton
            size="md"
            variant="primaryAction"
            w="150px"
            onClick={e => {
              e.preventDefault();
              router.push(`/collection/${props.address}/token/${props.id}`);
            }}
          >
            <Text>View</Text>
          </MinterButton>
        </Flex>
      </Box>
    </Flex>
  );
}
