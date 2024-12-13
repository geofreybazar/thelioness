import ButtonComponent from '../ReusableComponent/ButtonComponent';
import data from '../../assets/data.png';
import people from '../../assets/people.png';
import security from '../../assets/security.png';

const features = [
  {
    icon: data,
    title: "Advanced Security",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    icon: people,
    title: "Real-Time Analytics",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    icon: security,
    title: "User-Friendly Interface",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  }

]

function FeatureSection({handleStakeNow}) {

  return (
    <div className='p-20 h-800 flex justify-center items-center'>
      <div className="w-1300 flex flex-col gap-12 ">
        <div className='flex flex-col items-center'>
          <div>Unleash the Power of Staking.</div>
          <div className='text-5xl font-bold'>Join the Pride, Grow Your Wealth</div>
        </div>      
        <div className='grid grid-cols-3 gap-32'>
          {features.map((feature, index) => (
            <div key={index} className='p-8 w-350 border h-300 bg-purple text-white rounded-3xl flex flex-col justify-between'>
              <div>
                <img src={feature.icon} alt="icon" className='w-1/6'/>
                <div className='font-semibold text-2xl'>{feature.title}</div>
              </div>            
              <div>{feature.body}</div>
              <div className="justify-self-end" >
                <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
                  Stake Now
                </ButtonComponent>
              </div>
            </div>
          ))}
        </div>
      </div>      
    </div>
  )
}

export default FeatureSection