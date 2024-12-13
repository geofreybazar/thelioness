import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import ButtonComponent from '../ReusableComponent/ButtonComponent';

const StakeDashboard = () => {
    const { connected, connect, disconnect, publicKey, wallet } = useWallet();
    const { setVisible } = useWalletModal();

    const handleConnectWallet = async () => {
        if (!wallet) {
            setVisible(true);
            return;
        }
        try {
            if (connected) {
                await disconnect();
            } else {
                await connect();
            }
        } catch (error) {
            console.error("Wallet connection error:", error);
        }
    };

    return (
        <ButtonComponent fontweights='700' color='primary' onClick={handleConnectWallet}>
            {connected ? `Disconnect (${publicKey?.toString().slice(0, 4)}...)` : 'Connect Wallet'}
        </ButtonComponent>
    );
};

export default StakeDashboard;
