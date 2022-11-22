import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import starWars from '../images/projects/Star_Wars_Logo.svg.png'

export default function Projects() {
    return (
        <>
            <Header />
            <h1>Página de projetos</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={starWars} />
                <Card.Body>
                    <Card.Title>Projeto Star Wars Search</Card.Title>
                    <Card.Text>
                        Neste projeto feito em React.js foi desenvolvido 
                        uma lista com filtros de planetas do universo de Star Wars.
                    </Card.Text>
                    <a href="https://jcaluiz.github.io/Project-StartWars-Planet-Search/" target='_blank' rel='noreferrer'>
                        <Button variant="primary">Clique para ir a página</Button>
                    </a>
                </Card.Body>
            </Card>
            <Footer />
        </>
    )
}