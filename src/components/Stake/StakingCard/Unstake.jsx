import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import formatMoney from 'accounting-js/lib/formatMoney.js'
import logo from '../../../assets/logo.svg';
import ButtonComponent from '../../ReusableComponent/ButtonComponent';

function Unstake() {
  const userInfo = useSelector((state) => state.user.user)
  const [unstakingBalance, setUnstakingBalance] = useState(0.25)
  const [waitingPeriod, setWaitingPeriod] = useState(7)

  return (
    <div className='p-5 flex flex-col gap-3'>
      <div className='text-white flex items-center justify-between border p-4 rounded-3xl bg-backgroundImg'>
        <div className=' flex gap-5 items-center'>
          <div>Unstaking Balance:</div>
          <div className='flex gap-2 text-2xl font-semibold'><img src={logo} alt="" className='w-12' />{unstakingBalance}</div>
        </div>
        <div className='cursor-pointer border p-2 rounded-3xl hover:bg-main hover:text-black'>
          View Receipts
        </div>
      </div>

      <div className='flex items-center gap-5 justify-between'>
        <div>Waiting Period:</div>
        <div className='font-semibold text-2xl'>{waitingPeriod} days</div>
      </div>
      
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div>
            Wallet Balance:
          </div>
          <div className='text-2xl font-semibold'>
            { userInfo ? (
              formatMoney(userInfo?.balance , { symbol: ""})
            ) : (
              <span>0.00</span>
            )}
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <div>
            Your Stake:
          </div>
          <div className='text-2xl font-semibold'>
            0.00
          </div>
        </div>  
      </div>

      <div className='w-full flex flex-col gap-2'>
        <TextField
          fullWidth
          size="small"
          type='number'
        />
        <ButtonComponent>
          Unstake
        </ButtonComponent>
      </div>
      
    </div>
  )
}

export default Unstake