import React from 'react';
import Header from '../components/Header';
import minhaFoto from '../images/profile/minha-foto.png';
import linkedinLogo from '../images/icons/social/linkedin.png';
import githubLogo from '../images/icons/social/github.png';
import whatsappLogo from '../images/icons/social/whatsapp.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CarouselComponent from '../components/profile/Carousel';
import Footer from '../components/Footer';

export default function Profile() {
    return (
        <>
            <Header />
            <main className='main-profile'>
                <div className='introduction-pic-container'>
                    <div className='introduction-container'>
                        <div>
                            <h1 className='introduction-title about-text'>
                                Olá
                            </h1>
                            <h2 className='introduction-title about-text'>
                                Eu sou{' '}
                                <span>L</span>
                                <span>u</span>
                                <span>i</span>
                                <span>z</span>
                                {' '}
                                <span>J</span>
                                <span>u</span>
                                <span>n</span>
                                <span>i</span>
                                <span>o</span>
                                <span>r</span>
                            </h2>
                        </div>
                        <div>
                            <p className='introduction-title about-text'>Eu sou Desenvolvedor Web Full-Stack</p>
                        </div>
                        <div>
                            <Link to='/sobre'>
                                <Button className='space-container' variant="primary" size="lg">Sobre Mim</Button>
                            </Link>
                        </div>
                        <div className='social-container'>
                            <a href='https://www.linkedin.com/in/luiz-junior-dev/' target='_blank' rel='noreferrer'>
                                <img src={linkedinLogo} alt='logo linkedin' className='logo-social' />
                            </a>
                            <a href='https://github.com/jcaluiz' target='_blank' rel='noreferrer'>
                                <img src={githubLogo} alt='logo github' className='logo-social' />
                            </a>
                            <a href='https://api.whatsapp.com/send?phone=5521991883501' target='_blank' rel='noreferrer'>
                                <img src={whatsappLogo} alt='logo whatsapp' className='logo-social' />
                            </a>
                        </div>
                    </div>
                    <img src={minhaFoto} alt='minha foto' id='minha-foto' />
                </div>
                <div id='images-text-projects-container'>
                    <h2>Imagens de alguns projetos</h2>
                    <div id='images-projects-container'>
                        <CarouselComponent />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}