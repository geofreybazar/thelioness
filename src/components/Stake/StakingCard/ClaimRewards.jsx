import ButtonComponent from "../../ReusableComponent/ButtonComponent"

function ClaimRewards() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full bg-backgroundImg text-white p-5 rounded-xl border flex items-center justify-between">
        <div>Rewards Earned:</div>
        <div className="font-semibold text-2xl">0.00</div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <ButtonComponent>
          Claim
        </ButtonComponent>
      </div>
    </div>
  )
}

export default ClaimRewards