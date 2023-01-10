import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function HeaderButtonsActive() {
    return (
        <div id='header-buttons-container-mobile'>
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
    )
}