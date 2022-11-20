import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function About() {
    return (
        <>
            <Header />
            <main className='main-about'>

                <div className='title-page'>
                    <h1>Sobre mim</h1>
                </div>
                <p className='about-text'>
                    Olá! É um prazer te receber em meu portfólio.
                    Tenho 28 anos, sou economista de formação e estudante
                    de Desenvolvimento Web Full Stack pela Trybe.
                    Sou brasileiro, natural do Rio de Janeiro e moro na
                    cidade de Magé na região metropolitana do Rio de Janeiro.
                </p>
            </main>
            <Footer />
        </>
    )
}