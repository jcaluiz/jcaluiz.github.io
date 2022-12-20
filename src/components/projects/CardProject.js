import starWars from '../../images/projects/Star_Wars_Logo.svg.png';
import trybewallet from '../../images/projects/trybewallet.png';
import colorPalette from '../../images/projects/color-palette.jpg';

const projects = [
    {
        image: starWars,
        title: 'Projeto Star Wars Search',
        text: `Neste projeto de front-end feito em React.js foi desenvolvido
        uma lista com filtros de planetas do universo de Star Wars.`,
        hrefPage: 'https://jcaluiz.github.io/Project-StartWars-Planet-Search/',
        hrefGitHub: 'https://github.com/jcaluiz/Project-StartWars-Planet-Search',
    },
    {
        image: trybewallet,
        title: 'Projeto TrybeWallet',
        text: `Neste projeto de front-end feito em React.js foi desenvolvido
        uma aplicação cuja finalidade é de ser uma carteira de gastos com o objetivo
        de usar as moedas corrente nos valores de câmbios atualizados de uma api
        e que salva de acordo com as despesas executadas.`,
        hrefPage: 'https://jcaluiz.github.io/project-trybewallet/',
        hrefGitHub: 'https://github.com/jcaluiz/project-trybewallet/',
    },
    {
        image: colorPalette,
        title: 'Projeto Pixel Art',
        text: `Neste projeto feito em HTML, CSS e JavaScript foi desenvolvido uma aplicação cuja a 
        finalidade é de ser um quadro com conjunto de pixels que pode pintar ao clicar no palete de 
        cores e em seguida nos pixels. É um projeto de pintura, que você pode desenhar nele com as 
        cores disponíveis. Nele, a primeira e a última palheta são de cores fixas preta e branca, 
        respectivamente, e as três do meio são geradas aleatóriamente ao carregar a página`,
        hrefPage: 'https://jcaluiz.github.io/project-pixel-art/',
        hrefGitHub: 'https://github.com/jcaluiz/project-pixel-art/',
    }
];

export default projects;
