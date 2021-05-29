import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu'
export default function Dashboard() {
  return (
    <div>
        <Header/>
        <Menu/>
    </div>
  );
}