import starWars from '../../images/projects/Star_Wars_Logo.svg-removebg-preview.png';
import trybewallet from '../../images/projects/trybewallet.png';
import colorPalette from '../../images/projects/color-palete-removed.png';
import todoList from '../../images/projects/todo-list.jpeg';
import misteryLetter from '../../images/projects/letter-final.png';
import memeGenerate from '../../images/projects/meme-generate.png';
import colorGuess from '../../images/projects/color-guess.png';
import shoppingCart from '../../images/projects/shopping-cart.png';
import talkerManager from '../../images/projects/talker-manager.jpg';
import storeManager from '../../images/projects/store-manager.png';

const projects = [
    {
        id: 0,
        image: starWars,
        title: 'Projeto Star Wars Search',
        text: `Neste projeto de front-end feito em React.js foi desenvolvido
        uma lista com filtros de planetas do universo de Star Wars.`,
        hrefPage: 'https://jcaluiz.github.io/Project-StartWars-Planet-Search/',
        hrefGitHub: 'https://github.com/jcaluiz/Project-StartWars-Planet-Search',
        underDevelopment: false,
        developmentType: 'Front-End',
    },
    {
        id: 1,
        image: trybewallet,
        title: 'Projeto TrybeWallet',
        text: `Neste projeto de front-end feito em React.js foi desenvolvido
        uma aplicação cuja finalidade é de ser uma carteira de gastos com o objetivo
        de usar as moedas corrente nos valores de câmbios atualizados de uma api
        e que salva de acordo com as despesas executadas.`,
        hrefPage: 'https://jcaluiz.github.io/project-trybewallet/',
        hrefGitHub: 'https://github.com/jcaluiz/project-trybewallet/',
        underDevelopment: false,
        developmentType: 'Front-End',
    },
    {
        id: 2,
        image: colorPalette,
        title: 'Projeto Pixel Art',
        text: `Neste projeto feito em HTML, CSS e JavaScript foi desenvolvido uma aplicação cuja a 
        finalidade é de ser um quadro com conjunto de pixels que pode pintar ao clicar no palete de 
        cores e em seguida nos pixels. É um projeto de pintura, que você pode desenhar nele com as 
        cores disponíveis. Nele, a primeira e a última palheta são de cores fixas preta e branca, 
        respectivamente, e as três do meio são geradas aleatóriamente ao carregar a página`,
        hrefPage: 'https://jcaluiz.github.io/project-pixel-art/',
        hrefGitHub: 'https://github.com/jcaluiz/project-pixel-art/',
        underDevelopment: false,
        developmentType: 'Front-End',
    },
    {
        id: 3,
        image: shoppingCart,
        title: 'Projeto Shopping Cart',
        text: `Neste projeto feito em HTML, CSS e JavaScript foi desenvolvido uma aplicação de 
        uma loja virtual utilizando a API do Mercado Livre.`,
        hrefPage: 'https://jcaluiz.github.io/project-shopping-cart/',
        hrefGitHub: 'https://github.com/jcaluiz/project-shopping-cart',
        underDevelopment: false,
        developmentType: 'Front-End',
    },
    {
        id: 4,
        image: talkerManager,
        title: 'Projeto Talker Manager',
        text: `Neste projeto de back-end feito em Node.js foi desenvolvido uma aplicação 
        de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, 
        pesquisar, editar e excluir informações.`,
        hrefPage: null,
        hrefGitHub: 'https://github.com/jcaluiz/project-talker-manager',
        underDevelopment: false,
        developmentType: 'Back-end',
    },
    {
        id: 5,
        image: storeManager,
        title: 'Projeto Store Manager',
        text: `Neste projeto de back-end feito em Node.js foi desenvolvido minha primeira 
        API utilizando a arquitetura MSC (model-service-controller). A API é um sistema 
        de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, 
        deletar e atualizar produtos e vendas. É utilizado o banco de dados MySQL para a 
        gestão de dados. Além disso, a API é RESTful.`,
        hrefPage: null,
        hrefGitHub: 'https://github.com/jcaluiz/project-store-manager',
        underDevelopment: false,
        developmentType: 'Back-end',
    },
    {
        id: 6,
        image: todoList,
        title: 'Projeto To Do List',
        text: `Neste projeto feito em HTML, CSS e JavaScript foi desenvolvido uma aplicação cuja a 
        finalidade é de ser uma lista de tarefas em que é possível mostrar como finalizado a tarefa
        ao clicar duas vezes, traçando o texto.`,
        hrefPage: 'https://jcaluiz.github.io/project-todo-list/',
        hrefGitHub: 'https://jcaluiz.github.io/project-todo-list/',
        underDevelopment: true,
        developmentType: 'Front-End',
    },
    {
        id: 7,
        image: misteryLetter,
        title: 'Projeto Mistery Letter',
        text: `Neste projeto feito em HTML, CSS e JavaScript foi desenvolvido uma aplicação cuja a 
        finalidade é de criar cartas estilizando as letras dentro dela.`,
        hrefPage: 'https://jcaluiz.github.io/project-mistery-letter/',
        hrefGitHub: 'https://github.com/jcaluiz/project-mistery-letter',
        underDevelopment: true,
        developmentType: 'Front-End',
    },
    {
        id: 8,
        image: memeGenerate,
        title: 'Projeto Meme Generator',
        text: `Neste projeto feito em HTML, CSS e JavaScript foi desenvolvido uma aplicação cuja a 
        finalidade é de fazer criações de memes.`,
        hrefPage: 'https://jcaluiz.github.io/project-meme-generator/',
        hrefGitHub: 'https://github.com/jcaluiz/project-meme-generator',
        underDevelopment: true,
        developmentType: 'Front-End',
    },
    {
        id: 9,
        image: colorGuess,
        title: 'Projeto Color Guess',
        text: `Neste projeto feito em HTML, CSS e JavaScript foi desenvolvido uma aplicação de jogo 
        para de adivinhação de cor pontuando de forma positiva acertando e negativa errando.`,
        hrefPage: 'https://jcaluiz.github.io/project-color-guess/',
        hrefGitHub: 'https://github.com/jcaluiz/project-color-guess',
        underDevelopment: true,
        developmentType: 'Front-End',
    },
];

export default projects;
