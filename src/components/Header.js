import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import perfilImagem from '../images/header/logo-portfolio.png';
import Button from 'react-bootstrap/Button';
import HeaderButtonsActive from './toolsHeader/HeaderButtonsActive';

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);

    const sinalActive = () => {
        setActiveMenu((state) => !state);
        console.log(activeMenu);
    }

    return (
        <header className='header-content-container'>
            <nav id='header-container'>
                <div id='header-elements-container'>
                    <img id='imagem-perfil' src={perfilImagem} alt='imagem de perfil' />
                </div>
                <div className='menu-buttons-container'>
                    <div className='mobile-menu' onClick={() => sinalActive()}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                    {!activeMenu ?
                        <div id='header-buttons-container'>
                            {/* <Link to='https://www.linkedin.com/in/luiz-junior-dev/'>
                        <Button variant="outline-secondary">LINKEDIN</Button>
                    </Link> */}
                            <a className='button-header' href='https://www.linkedin.com/in/luiz-junior-dev/' target='_blank' rel='noreferrer'>LINKEDIN</a>
                            {/* <Link to='/sobre'>
                        <Button variant="outline-secondary" type='button'>Sobre</Button>
                    </Link> */}
                            <a className='button-header' href='https://github.com/jcaluiz' target='_blank' rel='noreferrer'>GITHUB</a>
                            {/* <Link to='/skills'>
                        <Button variant="outline-secondary">Skills</Button>
                    </Link> */}
                            <a className='button-header' href='https://api.whatsapp.com/send?phone=5521991883501' target='_blank' rel='noreferrer'>WHATSAPP</a>
                            {/* <Link to='/projects'>
                        <Button variant="outline-secondary">Projetos</Button>
                    </Link>
                    <Link to='/contato'>
                        <Button variant="outline-secondary">Contato</Button>
                    </Link> */}
                        </div>
                        : <HeaderButtonsActive />}
                </div>
            </nav>
        </header>
    )
}