import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';

export default function MenuMobile() {
    const { sinalActive } = useContext(PortfolioContext);
    return (
        <div className='mobile-menu' onClick={() => sinalActive()}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    )
}