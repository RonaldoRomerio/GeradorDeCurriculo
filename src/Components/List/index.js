import React from 'react';
import './lista.css'
import {Row, Col} from 'react-flexbox-grid';
import {FiExternalLink} from 'react-icons/fi';
export default function List({children}) {
 return (
   <div className='list_container'>
        <ul>
            {children}
        </ul>
   </div>
 );
}