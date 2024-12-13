import ButtonComponent from "../ReusableComponent/ButtonComponent";
import coins from '../../assets/coins.png'

function CalltoActionSection({handleStakeNow}) {

  return (
    <div className='p-20 h-645 gap-32 flex justify-center items-center'>
      <div className="w-1300 flex">
         <div className="flex flex-col gap-10">
          <div className="text-6xl font-bold">Start Your Staking Journey Today</div>
          <div className="text-xl">Join our community and unlock the potential of your assets with ElsaTheLioness staking.</div>
          <div className="w-full" >
            <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
                Stake Now
            </ButtonComponent>
          </div>
        </div>
        <div>
          <img src={coins} alt="" />
        </div>
      </div>     
    </div>
  )
}

export default CalltoActionSection