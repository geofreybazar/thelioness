import ButtonComponent from '../ReusableComponent/ButtonComponent'
import benefit from '../../assets/benefit.png'

function BenefitsSection({handleStakeNow}) {

  return (
    <div className='p-20 bg-backgroundImg w-full bg-cover bg-center h-864 flex justify-center'>
      <div className='w-1300 grid grid-cols-2 items-center gap-32'>
        <div>
          <img src={benefit} alt="stakenow" className='h-640' />
        </div>
        <div className='text-white flex flex-col gap-8'>
          <div className=' text-4xl font-bold'>Unlock Your Earning Potential with Staking</div>
          <div>Experience high returns with our user-friendly staking platform. Enjoy peace of mind with our robust security features.</div>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <div className='font-semibold'>High Returns</div>
              <div>Maximize your profits with competitive APYs on various staking pools.</div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='font-semibold'>High Returns</div>
              <div>Maximize your earnings with competitive staking rewards tailored for optimal growth.</div>
            </div>
          </div>
          <div>
            <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
              Stake Now
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsSection