import MonitoringCards from "./MonitoringCards"
import StakingCard from "./StakingCard/StakingCard"

function StakeDashboard() {
  return (
    <div className="flex justify-center">
      <div className="w-1300 flex flex-col gap-12">
        <MonitoringCards/>
        <StakingCard/>
      </div>
        
    </div>
  )
}

export default StakeDashboard