import React from 'react';
import './card.css'
import {Link} from 'react-router-dom'
export default function Card({title, link, children}) {
    return (
        <div className='card_content'>
                <div className='card_title'>
                    {title}
                </div>
                <div className='card_info'>
                    {children}
                </div>
                <div className='card_acess'>
                    <Link to={link}>acessar</Link>
                </div>
        </div>
    );
}