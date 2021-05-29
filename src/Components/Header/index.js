import {useContext} from 'react';
import './header.css';
import {FiLogOut, FiSettings} from 'react-icons/fi';
import {AuthContext} from '../../context/auth'
import {Link} from 'react-router-dom';

export default function Header() {
      const {singOut} = useContext(AuthContext)
  return (
    <div className="header_container">
      <header>
        <div className="left_area">
          <Link to='/dashboard'>SR IMPRESSÕES</Link>
        </div>
        <div className="right_area">
        <button className='button_logout' onClick={() => singOut()} ><FiLogOut size={25} color="#FFF"/> 
          <span>Sair</span>
        </button>
        <Link><FiSettings size={25} color="#FFF"/> <span>Configurações</span></Link>
        </div> 
      </header>
    </div>
  );
}