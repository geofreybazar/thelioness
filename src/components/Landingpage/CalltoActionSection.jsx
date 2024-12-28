import ButtonComponent from "../ReusableComponent/ButtonComponent";
import coins from '../../assets/coins.png'

function CalltoActionSection({handleStakeNow}) {

  return (
    <div className='p-5 md:p-12 lg:p-20 flex justify-center items-center'>
      <div className="w-1300 flex flex-col md:flex-row">
         <div className="flex flex-col text-center md:text-left gap-10">
          <div className="text-4xl lg:text-6xl font-bold">Start Your Staking Journey Today</div>
          <div className="lg:text-xl">Join our community and unlock the potential of your assets with ElsaTheLioness staking.</div>
          <div className="w-full" >
            <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
                Stake Now
            </ButtonComponent>
          </div>
        </div>
        <div className="flex justify-center ">
          <img src={coins} alt="" className="w-4/6 md2:w-96 md:w-full"/>
        </div>
      </div>     
    </div>
  )
}

export default CalltoActionSection