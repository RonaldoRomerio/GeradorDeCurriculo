import {useContext} from 'react';
import './header.css';
import {FiLogOut} from 'react-icons/fi';
import {AuthContext} from '../../context/auth'

export default function Header() {
      const {singOut} = useContext(AuthContext)
  return (
    <div className="header_container">
      <header>
        <div className="left_area">
          <h3>SR IMPRESSÕES</h3>
        </div>
        <div className="right_area">
        <button className='button_logout' onClick={() => singOut()} ><FiLogOut size={25} color="#FFF"/> Sair</button>
        </div> 
      </header>
    </div>
  );
}