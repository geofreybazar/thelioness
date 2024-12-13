import ButtonComponent from "../ReusableComponent/ButtonComponent";
import logo from '../../assets/logo.svg';
import { Link } from "react-router";

function NavBar({handleStakeNow}) {

  return (
    <div className="w-full py-5 px-20 flex justify-center">
      <div className="w-1300 grid grid-cols-3 items-center">
        <Link to='/'>
          <div className="flex items-center gap-6">
            <img className="h-14" src={logo} alt="Elsa Logo" />
            <span className="font-semibold text-2xl text-purple">
              Elsa The Lioness
            </span>
          </div>
        </Link>
        <div>
          <ul className="flex gap-14 font-semibold justify-center">
            <li>Docs</li>
            <li>About Us</li>
            <li>Stats</li>
          </ul>
        </div>
        <div className="justify-self-end" >
          <ButtonComponent fontweights='700' color='primary' onClick={handleStakeNow}>
            Connect Wallet
          </ButtonComponent>
        </div>
      </div>      
    </div>
  )
}

export default NavBar