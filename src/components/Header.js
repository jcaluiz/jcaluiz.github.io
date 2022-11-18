import React from 'react';
import { Link } from 'react-router-dom';
import perfilImagem from '../images/header/perfilImagem.png';
import Button from 'react-bootstrap/Button';

export default function Header() {
    return (
        <header>
            <div id='header-container'>
                <div id='header-elements-container'>
                    <img id='imagem-perfil' src={perfilImagem} alt='imagem de perfil' />
                </div>
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
            </div>
            <div id='header-limit' />
        </header>
    )
}