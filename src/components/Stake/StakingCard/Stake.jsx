import { useState } from 'react';
import { TextField } from '@mui/material';
import ButtonComponent from '../../ReusableComponent/ButtonComponent.jsx';
import logo from '../../../assets/logo.svg'

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
  const [isActive, setIsActive] = useState(1)
  const activeStyle = "bg-backgroundImg text-main p-5 cursor-pointer rounded-xl text-xl flex flex-col items-center";
  const inactiveStyle = "bg-gray-200 text-black p-5 cursor-pointer rounded-xl text-xl flex flex-col items-center";

  return (
    <div className='font-semibold flex flex-col gap-5'>
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
        <div className='flex gap-6'>
          {AprPerDays.map((field,index) => (
            <div key={index} 
            className={isActive === field.value ? activeStyle : inactiveStyle}
            onClick={() => setIsActive(field.value)}
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
        />
      </div>
      <ButtonComponent>
        Stake
      </ButtonComponent>
    </div>
  )
}

export default Stake