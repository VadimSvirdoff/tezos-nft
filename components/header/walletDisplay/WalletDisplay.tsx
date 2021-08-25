import { useSelector } from 'rtk';
import { WalletMenu } from 'components/header/walletMenu/WalletMenu';
import { WalletButton } from 'components/header/walletButton/WalletButton';



function WalletDisplay() {
    const system = useSelector(s => s.system);

    return system.status === 'WalletConnected'
        ? <WalletMenu />
        : <WalletButton />
}

export default WalletDisplay;