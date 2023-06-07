import { ArrowDownRight, Github } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import React, { useState } from 'react';
import projects from './CardProject';

export default function Project() {
    const [initialIndex, setInitialIndex] = useState(0);
    const [finishIndex, setFinishInitialIndex] = useState(1);
    const [mostrarTexto, setMostrarTexto] = useState(false);
    // const projects = projects.filter(({ developmentType }) => developmentType === 'Front-End');

    const clickChevronRight = () => {
        const conditional = {
            0: () => {
                setInitialIndex(initialIndex + 2)
                setFinishInitialIndex(finishIndex + 2)
                if (initialIndex === projects.length - 2) {
                    setInitialIndex(0)
                    setFinishInitialIndex(1)
                }
                if (initialIndex === projects.length - 1) {
                    setFinishInitialIndex(0)
                }
                if (initialIndex === projects.length) {
                    setInitialIndex(0)
                }
            },
            1: () => 'impar',
        }
        const key = projects.length % 2 === 0 ? 0 : 1;
        console.log(conditional[key]())
    }
    console.log(`initialIndex: ${initialIndex}`)
    console.log(`finishIndex: ${finishIndex}`)
    console.log(`projects.length: ${projects.length}`)

    const clickChevronLeft = () => {
        const conditional = {
            0: () => {
                setInitialIndex(initialIndex - 2)
                setFinishInitialIndex(finishIndex - 2)
                if (finishIndex === 0) {
                    setInitialIndex(projects.length - 1)
                }
                if (finishIndex === 1) {
                    setInitialIndex(projects.length - 2)
                    setFinishInitialIndex(projects.length - 1)
                }
            },
            1: () => 'impar',
        }
        const key = projects.length % 2 === 0 ? 0 : 1;
        console.log(conditional[key]())
    }


    // console.log(projects.length - 1)
    // console.log(projects)
    console.log(projects.filter((e, i) => i >= initialIndex && i <= finishIndex))

    return (

        <div className='flex items-center gap-5 px-5 w-full justify-between'>
            <button onClick={() => clickChevronLeft()}>
                <ChevronLeft size={80} />
            </button>
            {
                // projects[index].map(({hrefPage, title, hrefGitHub}) => (
                <>
                    <div className=' w-full h-96 flex justify-around'>
                        {/* <iframe
                                src={projects[index].hrefPage}
                                title={projects[index].title}
                                width="100%"
                                height="100%"
                                className='hover:opacity-90'
                            >
                            </iframe> */}
                        {

                            projects.filter((e, i) => i >= initialIndex && i <= finishIndex)
                                .map(({ image, title, hrefGitHub, hrefPage, text, stacks }) => (

                                    <div
                                        className='w-96 h-full relative'
                                        onMouseEnter={() => setMostrarTexto(true)}
                                        onMouseLeave={() => setMostrarTexto(false)}
                                    >
                                        <div
                                            className='w-96 px-10 bg-gray-project h-full flex flex-col items-center justify-center hover:opacity-0'
                                        >

                                            <img src={image} alt={title} />
                                            <p className='text-center text-white'>{title}</p>
                                        </div>
                                        <a
                                            className="absolute top-3 right-1 border-2 rounded-full p-1 text-yellow-500"
                                            href={hrefGitHub}
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            <ArrowDownRight size={40} />
                                        </a>
                                        <a
                                            className="absolute top-20 right-1 border-2 rounded-full p-1 text-yellow-500"
                                            href={hrefPage}
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            <Github size={40} />
                                        </a>
                                        <div
                                            className={`top-32 flex flex-col items-center justify-center font-extralight transition-opacity duration-300 ${mostrarTexto ? 'opacity-100' : 'opacity-0'} absolute`}
                                        >
                                            {text}
                                            <div className='flex flex-wrap gap-2'>
                                                {
                                                    stacks.map((img) => (
                                                        <img src={img} alt="imagem" width={50} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </>

                // ))
            }
            <button onClick={() => clickChevronRight()} className='flex justify-end'>
                <ChevronRight size={80} />
            </button>
        </div>
    )
}