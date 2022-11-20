import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function HeaderButtonsActive() {
    return (
        <div id='header-buttons-container-mobile'>
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
    )
}