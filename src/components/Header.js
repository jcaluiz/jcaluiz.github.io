import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import perfilImagem from '../images/header/perfilImagem.png';
import Button from 'react-bootstrap/Button';
import HeaderButtonsActive from './toolsHeader/HeaderButtonsActive';

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);

    const sinalActive = () => {
        setActiveMenu((state) => !state);
        console.log(activeMenu);
    }

    return (
        <header>
            <nav id='header-container'>
                <div id='header-elements-container'>
                    <img id='imagem-perfil' src={perfilImagem} alt='imagem de perfil' />
                </div>
                <div className='mobile-menu' onClick={() => sinalActive()}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                {!activeMenu ? 
                <div id='header-buttons-container'>
                    <Link to='/'>
                        <Button variant="outline-secondary">Home</Button>
                    </Link>
                    <Link to='/sobre'>
                        <Button variant="outline-secondary" type='button'>Sobre</Button>
                    </Link>
                    <Link to='/skills'>
                        <Button variant="outline-secondary">Skills</Button>
                    </Link>
                    <Link to='/projects'>
                        <Button variant="outline-secondary">Projetos</Button>
                    </Link>
                    <Link to='/contato'>
                        <Button variant="outline-secondary">Contato</Button>
                    </Link>
                </div>
                : <HeaderButtonsActive />}
            </nav>
        </header>
    )
}