import ButtonComponent from "../ReusableComponent/ButtonComponent"

function HeroSection({handleStakeNow}) {

  return (
    <div className='p-20 bg-backgroundImg w-full bg-cover bg-center h-500 flex justify-center'>
      <div className="w-1300 grid grid-cols-2 items-center gap-32">
        <div className="text-white">
          <p>Unleash the Power of Staking</p>
          <p className="text-6xl font-bold">Stake Smart, Earn Big</p>
        </div>
        <div className="flex flex-col gap-10">      
          <div className="text-white text-xl"> 
            Maximize your earnings with crypto by utilizing staking, yield farming, and cashback rewards. Put your cryptocurrency to work and generate passive income effortlessly.
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

export default HeroSection