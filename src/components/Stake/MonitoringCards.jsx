import logo from '../../assets/logo.svg'

function MonitoringCards() {

  const monitoringValues = [
    {
      title: 'Your Staked',
      value: '12',
    },
    {
      title: 'Rewards Earned',
      value: '15'
    },
  ];


  return (
    <div>
      <div className='w-full flex justify-center gap-12'>
        {monitoringValues.map((field,index) => (
        <div key={index} className='p-5 rounded-2xl text-white grid grid-cols-2 items-center bg-backgroundImg w-96'>
            <div className="text-2xl">{field.title}:</div>
            <div className='flex gap-5 justify-center'>
              <img className='w-16' src={logo} alt="elsa" />
              <p className="font-bold text-3xl">{field.value}</p> 
            </div>       
        </div>
      ))}
      </div>      
    </div>
  )
}

export default MonitoringCards