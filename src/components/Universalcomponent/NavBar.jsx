import { useEffect } from 'react';
import { Link } from "react-router";
import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/userSlice';
import ButtonComponent from "../ReusableComponent/ButtonComponent";
import logo from '../../assets/logo.svg';

function NavBar({handleStakeNow}) {
  const dispatch = useDispatch()
  const { connection } = useConnection();
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
            await connect()
        };
    } catch (error) {
        console.error("Wallet connection error:", error);
    }
};

const  getBalanceEvery10Seconds = async () => {const newBalance =  await connection.getBalance(publicKey); return newBalance}

useEffect(() => {
  if(connected){
    getBalanceEvery10Seconds().then((res) => {
      dispatch(userActions.setUser({publicKey: publicKey.toString(), balance: res / LAMPORTS_PER_SOL }))
    })

  }else{
    dispatch(userActions.logout())
  }
}, [publicKey])

  return (
    <div className="w-full py-5 px-20 flex justify-center font-poppins">
      <div className="w-1300 grid grid-cols-3 items-center">
        <Link to='/'>
          <div className="flex items-center gap-6">
            <img className="h-14" src={logo} alt="Elsa Logo" />
            <span className="font-semibold text-2xl text-purple">
              Elsa The Lioness
            </span>
          </div>
        </Link>
        <div>
          <ul className="flex gap-14 font-semibold justify-center">
            <li>Docs</li>
            <li>About Us</li>
            <li>Stats</li>
          </ul>
        </div>
        <div className="justify-self-end" >
          {
            location.pathname === '/stake' ? (
            <ButtonComponent fontweights='700' color='primary' onClick={handleConnectWallet}>
               {connected ? `Disconnect (${publicKey?.toString().slice(0, 4)}...)` : 'Connect Wallet'}
            </ButtonComponent>
            ) : (
            <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
              Stake Now
            </ButtonComponent>
            )
          }
        </div>
      </div>      
    </div>
  )
}

export default NavBar