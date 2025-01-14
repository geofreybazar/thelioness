import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/userSlice';
import { useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

function ConnectWalletModal({setOpenConnectModal, wallets, select, publicKey, connected, getElsaCoinBalance, isPendingGetElsaCoinBalance }) {
    const dispatch = useDispatch()
    const { connection } = useConnection();

    const handleConnectWallet = (walletAdapter) => {
        select(walletAdapter)
        setOpenConnectModal(false)
    };

    useEffect(() => {
        const fetchBalancesAndUpdateUser = async () => {
          if (connected) {
            try {
              const solBalance = await connection.getBalance(publicKey);
              const { balance: elsaCoinBalance } = await getElsaCoinBalance(publicKey);
              const userCredentials = {
                publicKey: publicKey.toString(),
                solBalance: solBalance / LAMPORTS_PER_SOL,
                elsaCoinBalance,
              }; 
              dispatch(userActions.setUser(userCredentials));  
            } catch (error) {
              console.error("Error fetching balances:", error);
            }
          } 
        };
        fetchBalancesAndUpdateUser(); 
      }, [connected, publicKey, connection, dispatch]);

  return (
    <div className="p-7 flex flex-col gap-3 items-center">
      <div className="text-2xl font-semibold">
        Connect a wallet on Solana to continue
      </div>

      <div>
         {wallets.map((wallet,index) => (
         <div
            className='cursor-pointer grid grid-cols-2 gap-20 p-3 text-xl hover:bg-off-white'
            key={index}
            onClick={() => handleConnectWallet(wallet.adapter.name)}
          >
              <div className="font-semibold">
                {wallet.adapter.name}
              </div>

            {wallet.readyState === "Installed" ? (
                <div className="text-neutral-500">
                    Detected
                </div>
            ) : (
                <div></div>
            ) }

         </div>
        ))}
      </div>
       
      </div>
  )
}

export default ConnectWalletModal