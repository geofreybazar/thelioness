import { Routes, Route, useNavigate } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from "./pages/LandingPage";
import Stake from "./pages/Stake";
import NavBar from "./components/Universalcomponent/NavBar.jsx";
import Footer from "./components/Universalcomponent/Footer.jsx";

import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider,  } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import {WalletModalProvider,} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';


const queryClient = new QueryClient();

function App() {

  const navigate = useNavigate();
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);
  const handleStakeNow = () => {
    navigate('/stake')
  };

  return (
    <QueryClientProvider client={queryClient}>
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  <NavBar handleStakeNow={handleStakeNow}/>
                    <Routes>
                      <Route path='/' 
                        element={<LandingPage handleStakeNow={handleStakeNow}/>}
                      />
                      <Route path='/stake' 
                        element={<Stake/>}
                      />
                    </Routes>
                  <Footer/>      
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>       
    </QueryClientProvider>
  )
}

export default App
