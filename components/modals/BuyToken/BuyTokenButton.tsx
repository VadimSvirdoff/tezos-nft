import React from 'react';
import {
  useDisclosure
} from '@chakra-ui/react';
import { useSelector } from 'rtk';
import { Nft } from 'lib/nfts/decoders';
import { BaseModalButtonProps } from 'components/modals/FormModal';
import { MinterButton } from 'components/common';
import { BuyTokenModal } from 'components/modals/BuyToken/BuyTokenModal';

interface BuyTokenButtonProps extends BaseModalButtonProps {
  token: Nft;
  sync?: boolean;
}

export function BuyTokenButton({ token, sync }: BuyTokenButtonProps) {
  const disclosure = useDisclosure();
  const { status } = useSelector(s => s.status.buyToken)

  return (
    <>
      <MinterButton variant="primaryAction" onClick={disclosure.onOpen} disabled={status === 'in_transit'}>
        Buy now
      </MinterButton>

      <BuyTokenModal token={token} disclosure={disclosure} sync={sync} />
    </>
  );
}