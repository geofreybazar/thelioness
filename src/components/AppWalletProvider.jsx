import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider,  } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { 
  PhantomWalletAdapter,
  LedgerWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {WalletModalProvider,} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

function AppWalletProvider({children}) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [
                  new PhantomWalletAdapter(),
                  new LedgerWalletAdapter(),
                  new SolflareWalletAdapter({ network }),
                  new TorusWalletAdapter(),
                ],
                [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                {children}                      
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>       
  )
}

export default AppWalletProvider