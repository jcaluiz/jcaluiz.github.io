import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projects from '../components/projects/CardProject';

export default function Projects() {

    return (
        <>
            <Header />
            <div className='main'>
                <main className="main-project">
                    <h1>Página de projetos</h1>
                    <div id="projects-card">
                        {
                            projects.map((project) => (
                                <div className="container">
                                    <div className="card">
                                        {project.underDevelopment && (
                                            <div className='container-neon'>
                                                <div className='neon'>Em Andamento</div>
                                            </div>
                                        )}
                                        <div className="imgBx">
                                            <img src={project.image} />
                                        </div>
                                        <div className="contentBx">
                                            <h2 id='project-title'>{project.title}</h2>
                                            <a href={project.hrefGitHub} className="btn-project-cursor" target="_blank">
                                                <div className="box-3">
                                                    <div className="btn-project btn-three">
                                                        <span>PÁGINA DO GITHUB</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href={project.hrefPage} className="btn-project-cursor" target="_blank">
                                                <div className="box-3">
                                                    <div className="btn-project btn-three">
                                                        <span>PÁGINA DO PROJETO</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}