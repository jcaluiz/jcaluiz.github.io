import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import info from '../images/icons/others/icone-de-informacao.png';
import projects from '../components/projects/CardProject';
import ProjectsComponent from '../components/pagesComponents/ProjectsComponent';

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
                <ProjectsComponent pageTitle='Página de Projetos' />
                <Footer />
            </div>
        </>
    )
}