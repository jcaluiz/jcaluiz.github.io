import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import ContactComponent from '../components/pagesComponents/ContactComponent';

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
                <ContactComponent />
            <Footer />
        </>
    )
}