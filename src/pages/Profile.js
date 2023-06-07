import React, { useContext, useState } from 'react';
import '../styles/Profile.scss';
import Header from '../components/Header';
import minhaFoto from '../images/profile/minha-foto.png';
// import linkedinLogo from '../images/icons/social/linkedin.png';
// import githubLogo from '../images/icons/social/github.png';
// import whatsappLogo from '../images/icons/social/whatsapp.png';
import Footer from '../components/Footer';
import ProjectsComponent from '../components/pagesComponents/ProjectsComponent';
import ContactComponent from '../components/pagesComponents/ContactComponent';
import progTecl from '../images/icons/others/programacao-teclado.jpeg';
import PortfolioContext from '../context/PortfolioContext';
import SkillsComponent from '../components/SkillsComponent';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import Project from '../components/projects/Project';

export default function Profile() {
    const { activeMenu } = useContext(PortfolioContext);
    const [info, setInfo] = useState(false);

    console.log(info);

    return (
        <>
            <Header />
            <main className='w-full flex flex-col bg-slate-500'>
                {/* <div class="bg"></div>
                <div className="more-snow"></div> */}
                <div  className=''>

                    <div className='introduction-pic-container'>
                        <div className='introduction-container'>
                            <div className='introduction-img-container'>
                                <div className='introduction-h1-container'>
                                    <h1 className='introduction-h1'>Olá!</h1>
                                    <h1 className='introduction-h1'>Eu sou</h1>
                                    <h1 aria-label="Hi! I'm a developer" className='introduction-h1'>
                                        &nbsp;<span class="typewriter"></span>
                                    </h1>
                                </div>
                                <img src={progTecl} alt='imagem teclado e linguagem' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-96 text-black'>
                    <div id='about-profile' className='pb-10'>
                        {!activeMenu && (
                            <a href="https://github.com/jcaluiz" target="_blank" className='minha-foto-link' rel='noreferrer'>
                                <img src={minhaFoto} onClick alt='minha foto' className='minha-foto' />
                            </a>
                        )}
                        <div className='about-me-profile'>
                            <h2 id='about-title'>SOBRE MIM</h2>
                            <p>
                                Olá! É um prazer te receber em meu portfólio. Tenho 29 anos, sou  graduado em Economia
                                e tornei-me Desenvolvedor Web Full-Stack estudando na Trybe.
                                Ganhei experiência com diversos projetos na Trybe e em projetos open-source.
                                Desenvolvo com diversas tecnologias e uma coisa que pude aprender durante a
                                minha vida é aprender a aprender e gostar de aprender, esse último me motiva
                                porque aprender é uma coisa que me fascina. Sou apaixonado em programar.
                            </p>
                        </div>
                    </div>
                    <div className='skills-profile-container bg-white-body pb-20 w-full pl-16'>
                        <h2 className='w-full lg:text-center'>Habilidades</h2>
                        <SkillsComponent />
                    </div>
                    <ProjectsComponent pageTitle='Projetos' classN='w-full bg-white-body' />
                    {/* <div className="flex h-screen w-screen flex-col gap-5">
                        <h1 className='text-center text-5xl'>Projetos</h1>
                        <Project />
                    </div> */}
                    <ContactComponent />
                    <Footer />
                </div>
            </main>
        </>
    )
}