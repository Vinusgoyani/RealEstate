import React from 'react';
import { assets, testimonialsData } from "../assets/assets.js";
import { motion } from "framer-motion"

const Testinomials = () => {
    return (
        <motion.div initial={{opacity:0,x:200}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                className='container mx-auto py-10  lg:px-32 w-full overflow-hidden text-center flex flex-col items-center' id='Testinomials'>
            <h1 className='mb-4 font-bold text-2xl sm:text-4xl justify-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testinomials</span></h1>
            <p className='text-gray-600 max-w-80 text-center mx-auto mb-8'>Real Stories from Those Who Found Home with Us</p>

            <div className='flex flex-warp justify-center gap-8'>
              {testimonialsData.map((testinimial,index)=>(
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <img src={testinimial.image} className='w-20 h-20 rounded-full mb-4 mx-auto'></img>
                    <h2 className='text-xl text-gray-700 font-medium'>{testinimial.name}</h2>
                    <p className='text-gray-500 '>{testinimial.title}</p>
                    <div className='flex flex-row justify-center gap-1  mt-3 mx-auto mb-3'>
                        {Array.from({length:testinimial.rating},(item,index)=>(
                            <img key={index} src={assets.star_icon}></img>
                        ))}
                    </div>
                    <p className='text-gray-600'>{testinimial.text}</p>
                </div>
              ))}
            </div>
        </motion.div>
    )
}

export default Testinomials