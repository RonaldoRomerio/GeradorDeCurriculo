import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth'

export default function Dashboard() {
  const {} = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}