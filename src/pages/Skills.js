import React from 'react';
import Header from '../components/Header';

export default function Skills() {
    return (
        <>
            <Header />
            <main>
                <div className='title-page'>
                    <h1>Minhas Habilidades</h1>
                </div>
                <div id='hard-skills-container'>
                    <div>
                        <div id='my-skills'>

                            <p>
                                Além das habilidades abaixo de Hard Skills de Front e Back,
                                tenho outras habilidades técnicas que se encaixam nas duas modalidades
                                como:
                            </p>

                        </div>
                        <div id='list-skills'>
                            <ul>
                                <li>JavaScript</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Unix</li>
                                <li>Bash</li>
                                <li>Lint</li>
                                <li>Metodologias Ageis</li>
                            </ul>
                        </div>
                    </div>
                    <div className='title-page'>
                        <h2>Hard Skills</h2>
                    </div>
                    <div className='skills-container'>
                        <div>
                            <h3>Front-End</h3>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript</li>
                                <li>HTML Semântico</li>
                                <li>CSS</li>
                                <li>Redux</li>
                                <li>Context</li>
                                <li>React Hooks</li>
                                <li>React Testing Library</li>
                                <li>Jest</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Back-End</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>MySQL</li>
                                <li>Docker</li>
                                <li>TypeScript</li>
                                <li>API REST</li>
                                <li>Express.js</li>
                                <li>Sequelize.js</li>
                                <li>Mapeamento Objeto-Relacional</li>
                                <li>Arquitetura de Software MSC</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}