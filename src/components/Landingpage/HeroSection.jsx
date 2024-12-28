import ButtonComponent from "../ReusableComponent/ButtonComponent"

function HeroSection({handleStakeNow}) {

  return (
    <div className='p-5 md:p-12 lg:p-20 bg-backgroundImg w-full bg-cover bg-center h-500 flex justify-center'>
      <div className="w-full h-full md3:w-500 md:w-1300 flex flex-col justify-center gap-5 md:grid md:grid-cols-2 items-center md:gap-12 lg:gap-32">
        <div className="text-white font-poppins">
          <p className="text-xl">Unleash the Power of Staking</p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold">Stake Smart, Earn Big</p>
        </div>
        <div className="flex flex-col md2:items-center gap-5 md:gap-10">      
          <div className="text-white text-lg md:text-lg lg:text-xl font-roboto"> 
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