import React, { useContext } from 'react';
import '../styles/Profile.scss';
import Header from '../components/Header';
import minhaFoto from '../images/profile/minha-foto.png';
import linkedinLogo from '../images/icons/social/linkedin.png';
import githubLogo from '../images/icons/social/github.png';
import whatsappLogo from '../images/icons/social/whatsapp.png';
import Footer from '../components/Footer';
import ProjectsComponent from '../components/pagesComponents/ProjectsComponent';
import ContactComponent from '../components/pagesComponents/ContactComponent';
import contextAPI from '../images/icons/stacks/context-api-removebg-preview.png';
import cssIcon from '../images/icons/stacks/css.png';
import dockerIcon from '../images/icons/stacks/docker.png';
import expressIcon from '../images/icons/stacks/expressJS.png';
import htmlIcon from '../images/icons/stacks/html5.png';
import jsIcon from '../images/icons/stacks/js.png';
import jwtIcon from '../images/icons/stacks/jwt.png';
import mongodbIcon from '../images/icons/stacks/Mongo-DB.png';
import mysqlIcon from '../images/icons/stacks/mysql.png';
import nodeIcon from '../images/icons/stacks/nodejs.png';
import pooIcon from '../images/icons/stacks/POO.png';
import reactIcon from '../images/icons/stacks/react.png';
import reduxIcon from '../images/icons/stacks/Redux.png';
import restApiIcon from '../images/icons/stacks/REST-API-icon.png';
import sequelizeIcon from '../images/icons/stacks/sequelize-logo.png';
import typescriptIcon from '../images/icons/stacks/typescript.png';
import eslintIcon from '../images/icons/stacks/eslint.png';
import bootstrapIcon from '../images/icons/stacks/bootstrap.png';
import arquiteturaIcon from '../images/icons/stacks/arquitetura-de-software.png';
import progTecl from '../images/icons/others/programacao-teclado.jpeg';
import PortfolioContext from '../context/PortfolioContext';

export default function Profile() {
    const skills = [htmlIcon, cssIcon, jsIcon, typescriptIcon,
        reactIcon, reduxIcon, contextAPI, nodeIcon, expressIcon, dockerIcon,
        mysqlIcon, mongodbIcon, sequelizeIcon, jwtIcon, restApiIcon, arquiteturaIcon,
        pooIcon, bootstrapIcon, eslintIcon];

    const { activeMenu } = useContext(PortfolioContext);

    const skillsName = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Redux.js',
        'Context API', 'Node.js', 'Express.js', 'Docker', 'MySQL', 'MongoDB', 'Sequelize.js',
        'JSON Web Token', 'REST API', 'MSC', 'POO', 'Bootstrap', 'EsLint'];

    return (
        <>
            <Header />
            <main className='main-profile'>
                <div class="bg"></div>
                <div className="more-snow"></div>
                <div id='first-container'>

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
                <div id='about-carousel-container'>
                    <div id='about-profile'>
                        {!activeMenu && (
                            <a href="https://github.com/jcaluiz" target="_blank" className='minha-foto-link' rel='noreferrer'>
                                <img src={minhaFoto} onClick alt='minha foto' className='minha-foto' />
                            </a>
                        )}
                        <div className='about-me-profile'>
                            <h2 id='about-title'>SOBRE MIM</h2>
                            <p>
                                Olá! É um prazer te receber em meu portfólio. Tenho 29 anos, sou  graduado em Economia
                                e tornei-me Desenvolvedor Web Full-Stack estudando durante um ano na Trybe.
                                Ganhei experiência com diversos projetos na Trybe e em projetos open-source.
                                Desenvolvo com diversas tecnologias e uma coisa que pude aprender durante a
                                minha vida é aprender a aprender e gostar de aprender, esse último me motiva
                                porque aprender é uma coisa que me fascina. Sou apaixonado em programar.
                            </p>
                        </div>
                    </div>
                    <div className='skills-profile-container'>
                        <h2>Habilidades</h2>
                        <div className='skills-profile'>
                            {
                                skills.map((skill, i) => (
                                    <div className='skill-profile'>
                                        <p>{skillsName[i]}</p>
                                        <img src={skill} alt={`icone de ${skillsName[i]}`} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <ProjectsComponent pageTitle='Projetos' classN='project-in-profile' />
                    <ContactComponent />
                    <Footer />
                </div>
            </main>
        </>
    )
}