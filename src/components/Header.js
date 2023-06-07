import React, { useContext } from 'react';
import logoImagem from '../images/header/logo-portfolio.png';
import HeaderButtonsActive from './toolsHeader/HeaderButtonsActive';
import PortfolioContext from '../context/PortfolioContext';
import { useHistory } from 'react-router-dom';

export default function Header() {
    const {activeMenu, setActiveMenu} = useContext(PortfolioContext);
    const router = useHistory();

    return (
        <header className='header-content-container'>
            <nav id='header-container'>
                <button id='header-elements-container' onClick={() => router.push('/')} className='w-60'>
                    <img id='imagem-logo' src={logoImagem} alt='imagem de logo' className='w-10' />
                </button>
                <div className='menu-buttons-container'>
                    <div className='mobile-menu' onClick={() => setActiveMenu((state) => !state)}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                    {!activeMenu ?
                        <div id='header-buttons-container'>
                            <a className='button-header' href='https://www.linkedin.com/in/luiz-junior-dev/' target='_blank' rel='noreferrer'>LINKEDIN</a>
                            <a className='button-header' href='https://github.com/jcaluiz' target='_blank' rel='noreferrer'>GITHUB</a>
                            <a className='button-header' href='https://api.whatsapp.com/send?phone=5521991883501' target='_blank' rel='noreferrer'>WHATSAPP</a>
                        </div>
                        : <HeaderButtonsActive />}
                </div>
            </nav>
        </header>
    )
}