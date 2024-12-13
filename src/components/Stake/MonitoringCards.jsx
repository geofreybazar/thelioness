import logo from '../../assets/logo.svg'

function MonitoringCards() {

  const monitoringValues = [
    {
      title: 'Total Staked',
      value: '32.5M',
    },
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
      <div className='grid grid-cols-3 gap-12'>
        {monitoringValues.map((field,index) => (
        <div key={index} className='p-5 rounded-2xl text-white text-2xl font-semibold grid grid-cols-2 items-center bg-backgroundImg'>
            <div >{field.title}:</div>
            <div className='flex gap-5 justify-center'>
              <img className='w-16' src={logo} alt="elsa" />
              {field.value}
            </div>       
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default MonitoringCards