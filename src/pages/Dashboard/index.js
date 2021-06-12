import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import Card from '../../Components/Card';
import {FiUser, FiGlobe} from 'react-icons/fi';
import './style.css'
export default function Dashboard() {
  return (
    <div>
        <Header/>
        <Menu/>
        <div className='content'>
          <div className='content_dashboard'>
            <div className='container_card'>
            <Card link='/candidatos' titulo='Qtd. de Candidatos'>
              <span>0</span> <FiUser size={50} color={'red'}/>
            </Card>
            <Card link='/empresas' titulo='Qtd. de Empresas'>
              <span>0</span> 
              <FiGlobe size={50} color={'red'}/>
            </Card>
            </div>  
          </div>
        </div>
    </div>
  );
}