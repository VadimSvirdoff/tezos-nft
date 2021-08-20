import {
    Box,
    Flex,
    Image,
    Text,
  } from '@chakra-ui/react';

function WalletInfo(props: { tzPublicKey: string }) {
    return (
        <Flex flexDir="row" align="center" my={4}>
            <Box borderRadius="100%" width={10} height={10} bg="brand.darkGray" p={1}>
                <Image
                    src={`https://services.tzkt.io/v1/avatars2/${props.tzPublicKey}`}
                />
            </Box>
            <Text fontFamily="mono" ml={2}>
                {props.tzPublicKey}
            </Text>
        </Flex>
    );
}

export default WalletInfo;