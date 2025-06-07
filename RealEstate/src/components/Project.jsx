import React from 'react'
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";
import {projectsData} from "../assets/assets.js";
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from "framer-motion"

const Project = () => {
    const [currentin,setcurrentin]=useState(0);
    const [cardtoshow,setcardstoshow]=useState(1);

    const nextProject=()=>{
        setcurrentin((prev)=> (prev+1) % projectsData.length)
    }
    const prevProject=()=>{
        setcurrentin((prev)=> prev === 0 ? projectsData.length : prev - 1);
    }
    useEffect(()=>{
        const updatecardToDisplay=()=>{
            if(window.innerWidth >=1024){
                setcardstoshow(projectsData.length)
            }else{
                setcardstoshow(1)
            }
        }
        updatecardToDisplay();

        window.addEventListener('resize',updatecardToDisplay);
        return ()=> window.removeEventListener('resize',updatecardToDisplay);
        
    },[])
    return (
        <motion.div initial={{opacity:0,x:-200}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                    className='mt-10 container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Project'>
            <div className='flex flex-col items-center'>
                <h1 className='mb-4 font-bold text-2xl sm:text-4xl'>Projects    <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
                <p className='text-gray-600 max-w-80 text-center mx-auto mb-8'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
            </div>

            {/*slider buttons*/}
            <div className='flex mb-8 justify-end items-center'>
                <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previos Project' onClick={prevProject} disabled={currentin == 0}>
                    <img src={left_arrow}></img>
                    {console.log(currentin)}
                </button>
                <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project' onClick={nextProject} disabled={currentin == 5}>
                    <img src={right_arrow}></img>
                </button>
            </div>

            {/* project slider  */}

            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentin * (165 / cardtoshow)}%)` }}>
                    {projectsData.map((project,index)=>(
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} className='w-full h-auto mb-14'></img>
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                <p className='text-gray-500 text-sm'>{project.price} <span className='px-1'> | </span>{project.location}</p>
                                </div>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Project;