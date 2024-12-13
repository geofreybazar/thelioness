import ButtonComponent from "../ReusableComponent/ButtonComponent"


const questionsAndAnswers = [
    {
        question: "What is staking?",
        answer: "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards based on the amount you stake. Our Dapp simplifies this process, making it accessible for everyone."
    },
    {
        question: "How does the Dapp work?",
        answer: "Our Dapp connects users to various staking pools, allowing you to choose where to stake your assets. It provides real-time analytics and a user-friendly interface to track your rewards. With ElsaTheLioness, staking is straightforward and efficient."
    },
    {
        question: "What are the fees?",
        answer: "We strive to keep fees minimal to maximize your earnings. Transaction fees may apply depending on the network used for staking. Always check the fee structure within the Dapp before staking."
    },
    {
        question: "Is my investment safe?",
        answer: "We prioritize security and use industry-standard protocols to protect your assets. Our Dapp is regularly audited to ensure compliance and safety. However, always do your own research before investing."
    },
    {
        question: "How to start staking?",
        answer: "To start staking, simply create an account on our Dapp and connect your wallet. Choose your preferred staking pool and follow the prompts to stake your assets. Enjoy earning rewards effortlessly!"
    },
]

function FaqsSection({handleStakeNow}) {

  return (
    <div className='p-20 bg-backgroundImg bg-cover bg-center  flex justify-center'>
        <div className="w-1300 grid grid-cols-2 gap-20">
            <div className="text-white flex flex-col gap-8">
                <div className="text-6xl font-bold">FAQs</div>
                <div>Discover answers to your questions about staking and the unique features of our Dapp.</div>
                <div className="w-full">
                    <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
                        Stake Now
                    </ButtonComponent> 
                </div>
                
            </div>
            <div className="flex flex-col gap-8">
                {questionsAndAnswers.map((field,index) => (
                    <div key={index} className="flex flex-col gap-5 border border-main p-5">
                        <div className="text-main">{field.question}</div>
                        <div className="text-white">{field.answer}</div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default FaqsSection