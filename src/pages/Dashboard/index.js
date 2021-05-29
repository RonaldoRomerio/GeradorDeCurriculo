import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth'
import Header from '../../Components/Header'
export default function Dashboard() {
  const {} = useContext(AuthContext);
  return (
    <div>
      <Header/>
    </div>
  );
}