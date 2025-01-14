import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/userSlice';
import { isLoadingElsaCoinActions } from "../../store/isLoadingElsaCoinSlice"; 
import { Link } from "react-router";
import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import ButtonComponent from "../ReusableComponent/ButtonComponent";
import logo from '../../assets/logo.svg';
import Pop from '../ReusableComponent/Pop';
import ConnectWalletModal from '../Stake/ConnectWalletModal';
import variables from '../../utils/variables.js';
import useGetElsaCoinBalance from "../../hooks/useGetElsaCoinBalance";

const style = variables.style;

function NavBar({handleStakeNow}) {
  const dispatch = useDispatch()
  const { connected, disconnect, publicKey, wallet, wallets, select } = useWallet();
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const handleCloseConnectModal = () => setOpenConnectModal(false)

  const {getElsaCoinBalance, isPendingGetElsaCoinBalance, isSuccess, error, isError, status, } = useGetElsaCoinBalance();

  const handleConnectWallet = async () => {
      if (!wallet) {
          setOpenConnectModal(true);
          return;
      } else {
        await disconnect();
        dispatch(userActions.logout());
      }
  };

  useEffect(() => {
    console.log('isPendingGetElsaCoinBalance:', isPendingGetElsaCoinBalance);
    if(isPendingGetElsaCoinBalance){
        dispatch(isLoadingElsaCoinActions.isLoading(true));  
    } else {
        dispatch(isLoadingElsaCoinActions.isLoading(false));  
    }
  }, [isPendingGetElsaCoinBalance])

  //responsive navbar
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    event.preventDefault();
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, right: open });
  };

  return (
    <div className="w-full p-5 lg:py-5 lg:px-20 md:px-16 flex justify-center font-poppins">
      <div className="w-1300 grid md:grid-cols-3 items-center">
        <Link to='/' className='flex justify-between'>
          <div className="flex justify-left items-center gap-2 lg:gap-6">
            <img className="h-8 lg:h-14" src={logo} alt="Elsa Logo" />
            <span className="font-semibold text-md lg:text-xl xl:text-2xl text-purple">
              Elsa The Lioness
            </span>
          </div>
          <div className='md:hidden'>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon fontSize='medium'/>  
            </Button>
          </div>
        </Link>
        <div className='hidden text-sm lg:text-lg xl:text-xl md:block'>
          <ul className="flex gap-6 lg:gap-14 font-semibold justify-center">
            <li className='cursor-pointer hover:text-purple'>Docs</li>
            <li className='cursor-pointer hover:text-purple'>About Us</li>
            <li className='cursor-pointer hover:text-purple'>Stats</li> 
          </ul>
        </div>
        <div className="hidden md:block justify-self-end" >
          {
          isPendingGetElsaCoinBalance ? (
              <LoadingButton  
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained">
                connecting
            </LoadingButton>
            ) : (
            location.pathname === '/stake' ? (
            <ButtonComponent fontweights='700' color='primary' onClick={handleConnectWallet}>
               {connected ? `Disconnect (${publicKey?.toString().slice(0, 4)}...)` : 'Connect Wallet'}
            </ButtonComponent>
            ) : (
            <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
              Stake Now
            </ButtonComponent>
            )
          )}
        </div>        
      </div>  
      
      <SwipeableDrawer
          className='lg:hidden'
          anchor="right"
          open={state.right}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          transitionDuration={800}
        >
         <div className='w-screen p-5 flex justify-between'>
          <div>
            asd
          </div>            
            <button onClick={toggleDrawer(false)}>
              x
            </button>
        </div> 
      </SwipeableDrawer>  

      <Pop open={openConnectModal} handleClose={handleCloseConnectModal} style={style}>
          <ConnectWalletModal 
            setOpenConnectModal={setOpenConnectModal}
            wallets={wallets} 
            select={select} 
            publicKey={publicKey}
            connected={connected}
            getElsaCoinBalance={getElsaCoinBalance}
            isPendingGetElsaCoinBalance={isPendingGetElsaCoinBalance}
          />
      </Pop> 
    </div>
  )
}

export default NavBar