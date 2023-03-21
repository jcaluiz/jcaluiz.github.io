import React from 'react';
import contextAPI from '../images/icons/stacks/context-api-removebg-preview.png';
import cssIcon from '../images/icons/stacks/css.png';
import dockerIcon from '../images/icons/stacks/docker.png';
import expressIcon from '../images/icons/stacks/expressJS.png';
import htmlIcon from '../images/icons/stacks/html5.png';
import jsIcon from '../images/icons/stacks/js.png';
import jwtIcon from '../images/icons/stacks/jwt.png';
import mongodbIcon from '../images/icons/stacks/Mongo-DB.png';
import mysqlIcon from '../images/icons/stacks/mysql.png';
import nodeIcon from '../images/icons/stacks/nodejs.png';
import pooIcon from '../images/icons/stacks/POO.png';
import reactIcon from '../images/icons/stacks/react.png';
import reduxIcon from '../images/icons/stacks/Redux.png';
import restApiIcon from '../images/icons/stacks/REST-API-icon.png';
import sequelizeIcon from '../images/icons/stacks/sequelize-logo.png';
import typescriptIcon from '../images/icons/stacks/typescript.png';
import eslintIcon from '../images/icons/stacks/eslint.png';
import bootstrapIcon from '../images/icons/stacks/bootstrap.png';
import arquiteturaIcon from '../images/icons/stacks/arquitetura-de-software.png';
import pythonIcon from '../images/icons/stacks/Python.png';
import vueIcon from '../images/icons/stacks/vue.png';
import '../styles/components/SkillsComponent.scss';

export default function SkillsComponent() {
    const skills = [htmlIcon, cssIcon, jsIcon, typescriptIcon, pythonIcon,
        reactIcon, vueIcon, reduxIcon, contextAPI, nodeIcon, expressIcon, dockerIcon,
        mysqlIcon, mongodbIcon, sequelizeIcon, jwtIcon, restApiIcon, arquiteturaIcon,
        pooIcon, bootstrapIcon, eslintIcon];

    const skillsName = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'React.js', 'Vue.js', 'Redux.js',
        'Context API', 'Node.js', 'Express.js', 'Docker', 'MySQL', 'MongoDB', 'Sequelize.js',
        'JSON Web Token', 'REST API', 'MSC', 'POO', 'Bootstrap', 'EsLint'];

    return (
        <div className='skills-profile'>
            {
                skills.map((skill, i) => (
                    <div className='skill-profile'>
                        <p>{skillsName[i]}</p>
                        <img src={skill} alt={`icone de ${skillsName[i]}`} />
                    </div>
                ))
            }
        </div>
    )
}