import {
    Image,
} from '@chakra-ui/react';
import { useDispatch } from 'rtk';
import { connectWallet} from 'rtk/async/wallet';
import { MinterButton } from 'components/common';

export const WalletButton = () => {
    const dispatch = useDispatch();

    return (
        <MinterButton
            variant="secondaryAction"
            onClick={e => {
                e.preventDefault();
                dispatch(connectWallet());
            }}
        >
            Connect Wallet
            <Image src="/assets/wallet.svg" width="auto" height="40%" paddingLeft={3} />
        </MinterButton>
    )
}
