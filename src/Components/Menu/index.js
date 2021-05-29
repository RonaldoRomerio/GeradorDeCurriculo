import {useState} from 'react'
import {Link} from 'react-router-dom';
import {FiUser, FiUsers, FiAlignJustify, FiGlobe, FiArrowLeft, FiGrid} from 'react-icons/fi';
import './menu.css'
export default function Menu() {
    const [flCkecked, setflchecked] = useState(true);
    return (
    <>
        <input type="checkbox" id="check" onClick={() => {flCkecked ? setflchecked(false) : setflchecked(true)}}/>
        <div className='sidebar'>
            <label for="check">
                {flCkecked ? <FiArrowLeft color='#FFF' size={24}/> : <FiAlignJustify color='#FFF' size={24}/>}
            </label>
            <div className="link">
                <Link><FiUser color='#FFF' size={24}/><span>Candidatos</span></Link>
                <Link><FiGlobe color='#FFF' size={24}/><span>Empresas</span></Link>
                <Link><FiUsers color='#FFF' size={24}/><span>Usuários</span></Link>
            </div>
        </div>
    </>
    );
}