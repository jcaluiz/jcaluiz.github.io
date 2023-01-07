import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import info from '../images/icons/others/icone-de-informacao.png';
import projects from '../components/projects/CardProject';

export default function Projects() {
    const [selectValue, setSelectValue] = useState('');
    const [projectState, setProjectState] = useState([]);
    const [infoActive, setInfoActive] = useState({})
    const getSelectValue = (e) => {
        setSelectValue(e.target.value);
        if (e.target.value === 'Todos os tipos') setSelectValue('');
    }

    const createInfoOptions = () => {
        projectState.forEach((_test, index) => setInfoActive((state) => ({
            ...state,
            [index]: false,
        })));
    }

    useEffect(() => {
        setProjectState(selectValue ? projects.map((project) => project)
            .filter((type) => type.developmentType === selectValue && selectValue)
            : projects.map((project) => project))
        createInfoOptions();
    }, [selectValue]);

    useEffect(() => createInfoOptions(), [])

    return (
        <>
            <Header />
            <div className='main'>
                <main className="main-project">
                    <h1>Página de projetos</h1>
                    <Form.Select size="sm" id="select-project" onChange={(e) => getSelectValue(e)}>
                        <option>Todos os tipos</option>
                        <option>Front-End</option>
                        <option>Back-end</option>
                    </Form.Select>
                    <br />
                    <div id="projects-card">
                        {
                            projectState.map((project) => (
                                <div className="container">
                                    <div className="card">
                                        <img className='info-image' src={info} onClick={() => setInfoActive((state) => ({
                                            ...state,
                                            [project.id]: !infoActive[project.id],
                                        }))} />
                                        {infoActive[project.id] ? (
                                            <div className='info-text-container'>
                                                <p>{project.text}</p>
                                            </div>
                                        ) : (
                                            <>
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
                                                    {project.hrefPage && (
                                                        <a href={project.hrefPage} className="btn-project-cursor" target="_blank">
                                                            <div className="box-3">
                                                                <div className="btn-project btn-three">
                                                                    <span>PÁGINA DO PROJETO</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    )}
                                                </div>
                                            </>
                                        )}
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