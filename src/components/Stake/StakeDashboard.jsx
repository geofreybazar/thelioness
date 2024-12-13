import MonitoringCards from "./MonitoringCards"
import StakingCard from "./StakingCard/StakingCard"

function StakeDashboard() {
  return (
    <div className="flex flex-col gap-12">
        <MonitoringCards/>
        <StakingCard/>
    </div>
  )
}

export default StakeDashboard