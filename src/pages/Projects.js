import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectsComponent from '../components/pagesComponents/ProjectsComponent';

export default function Projects() {
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