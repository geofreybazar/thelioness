import { useState } from 'react';
import { TextField } from '@mui/material';
import ButtonComponent from '../../ReusableComponent/ButtonComponent.jsx';
import logo from '../../../assets/logo.svg'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AprPerDays = [
  {
    duration: 90,
    percentage: "5%",
    value: 1
  },
  {
    duration: 180,
    percentage: "12%",
    value: 2
  },
  {
    duration: 365,
    percentage: "25%",
    value: 3
  },
];

function Stake() {
  const [isActive, setIsActive] = useState(1);
  const [selectedApr, setSelectedApr] = useState("5%");
  const activeStyle = "bg-backgroundImg text-main p-5 cursor-pointer rounded-xl text-xl flex flex-col items-center";
  const inactiveStyle = "bg-gray-200 text-black p-5 cursor-pointer rounded-xl text-xl flex flex-col items-center";

  return (
    <div className='flex gap-8'>
      <div className='w-full font-semibold flex flex-col gap-5 p-5'>
        <div className='font-poppins flex items-center gap-5'>
          <div className='w-28'>
            <img src={logo} alt="elsa" />
          </div>
          <div className='text-2xl'>
            Elsa
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          Staking Period:
          <div className='flex gap-6 justify-center'>
            {AprPerDays.map((field,index) => (
              <div key={index} 
              className={isActive === field.value ? activeStyle : inactiveStyle}
              onClick={() => {setIsActive(field.value); setSelectedApr(field.percentage)}}
              >
                <div>
                  {field.percentage} 
                </div>
                <div>
                  {field.duration} days
                </div>              
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p>Wallet Balance:</p> 
          <div className='flex items-center'>
            <div className='w-12 '>
              <img src={logo} alt="elsa"/>
            </div>
            <div>
                0.00
            </div>
          </div> 
        </div>
        <div className='flex flex-col'>
          <p>Amount</p>
          <TextField
            size="small"
            type='number'
          />
        </div>
        <ButtonComponent>
          Stake
        </ButtonComponent>
      </div>

      <div className='w-full border flex flex-col rounded-2xl'>
        <div className='h-2/4 bg-backgroundImg rounded-t-2xl p-5 text-main flex flex-col justify-center'>
            <p className='text-xl font-semibold'>Fixed APR</p>
            <p className='text-5xl font-semibold'><TrendingUpIcon sx={{ fontSize: 50 }}/>{selectedApr}</p>
            <p>estimated earning: 0.00 usd</p>        
        </div>
        <div className='h-2/4 p-5 flex flex-col gap-3'>
        <p>Daily Real-Time Reward:</p>
        <p>Subscription Time:</p>
        <p>Interest Accrual Time:</p>
        <p>Interest Payment:</p>
        </div>
      </div>
      
    </div>
  )
}

export default Stake