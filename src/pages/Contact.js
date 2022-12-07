import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('É obrigatório preencher todos os campos');
            return;
        }
        const templateParams = {
            from_name: name,
            message,
            email,
        }
        emailjs.send(
            'service_1q05vh9',
            'template_osutrmq',
            templateParams,
            'ZpAtKJTwCgMHOQaAD'
        ).then((response) => {
            console.log('EMAIL ENVIADO', response.status, response.text);
            setName('');
            setEmail('');
            setMessage('');
        }, (err) => {
            console.log('ERRO: ', err);
        });
    }
    return (
        <>
            <Header />
            <main className="main-contact">
                <h1 id="title-contact-page">Deixe aqui a sua mensagem</h1>
                <Form className="forms-container" onSubmit={sendEmail}>
                    <Form.Group
                        className="mb-3"
                        controlId="Digite o seu nome"
                    >
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1">
                        <Form.Label>Endereço de Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control
                            as="textarea"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            rows={10}
                        />
                    </Form.Group>
                    <Button
                        variant="outline-primary"
                        type="submit"
                    >Enviar</Button>{' '}
                </Form>
            </main>
            <Footer />
        </>
    )
}