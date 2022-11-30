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
            <main className="main-project">
                <h1>Página de projetos</h1>
                <div id="projects-card">
                    {
                        projects.map((project) => (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.text}
                                    </Card.Text>
                                    <div className="button-project-container">
                                        <a href={project.hrefPage} target='_blank' rel='noreferrer'>
                                            <Button variant="primary">Ir à página</Button>
                                        </a>

                                        <a href={project.hrefGitHub} target='_blank' rel='noreferrer'>
                                            <Button variant="primary">Ir para o Repositório GitHub</Button>
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}