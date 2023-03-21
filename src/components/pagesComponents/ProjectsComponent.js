import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import info from '../../images/icons/others/icone-de-informacao.png';
import projects from '../projects/CardProject';
import '../../styles/components/ProjectsComponents.scss';

export default function ProjectsComponent(props) {
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

    console.log(projectState);

    useEffect(() => {
        setProjectState(selectValue ? projects.map((project) => project)
            .filter((type) => type.developmentType === selectValue && selectValue)
            : projects.map((project) => project))
        createInfoOptions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectValue]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => createInfoOptions(), [])

    return (
        <div className={props.classN}>
            <div className='main'>
                <main className="main-project">
                    <h1>{props.pageTitle}</h1>
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
                                        <img className='info-image' alt="imagem informação" src={info} onClick={() => setInfoActive((state) => ({
                                            ...state,
                                            [project.id]: !infoActive[project.id],
                                        }))} />
                                        {infoActive[project.id] ? (
                                            <div className='info-text-container'>
                                                <p>{project.text}</p>
                                                <div className='stack-icon-container'>
                                                    {
                                                        project.stacks.map((icon) => (
                                                            <img alt="imagem de stack" src={icon} className='stack-icon' />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                {project.underDevelopment && (
                                                    <div className='container-neon'>
                                                        <div className='neon'>Em Andamento</div>
                                                    </div>
                                                )}
                                                <div className="imgBx">
                                                    <img src={project.image} alt="imagem simbolo do projeto" />
                                                </div>
                                                <div className="contentBx">
                                                    <h2 id='project-title'>{project.title}</h2>
                                                    <a href={project.hrefGitHub} className="btn-project-cursor" target="_blank" rel="noreferrer">
                                                        <div className="box-3">
                                                            <div className="btn-project btn-three">
                                                                <span>PÁGINA DO GITHUB</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {project.hrefPage && (
                                                        <a href={project.hrefPage} className="btn-project-cursor" target="_blank" rel="noreferrer">
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
            </div>
        </div>
    )
}