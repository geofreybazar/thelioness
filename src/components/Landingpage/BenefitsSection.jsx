import ButtonComponent from '../ReusableComponent/ButtonComponent'
import benefit from '../../assets/benefit.png'

function BenefitsSection({handleStakeNow}) {

  return (
    <div className='p-5 md:p-12 lg:p-20 bg-backgroundImg w-full bg-cover bg-center flex justify-center '>
      <div className='w-1300 md:grid md:grid-cols-2 items-center md:gap-5'>
        <div className='py-5 md:py-0 flex justify-center md:justify-start'> 
          <img src={benefit} alt="stakenow" className='h-4/6 md2:h-96 md:h-500' />
        </div>
        <div className='text-white flex flex-col gap-8'>
          <div className=' text-3xl font-bold text-center md:text-left'>Unlock Your Earning Potential with Staking</div>
          <div>Experience high returns with our user-friendly staking platform. Enjoy peace of mind with our robust security features.</div>
          <div className='grid gap-5 md:grid-cols-2'>
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