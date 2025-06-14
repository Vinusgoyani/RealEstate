import React from 'react'
import {assets} from '../assets/assets';
const Footer = () => {
  return (
    <div className='pt-10  md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='flex container flex-col md:flex-row justify-between items-center mb-8'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark}></img>
                <p className='mt-4 mb-8 text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Compony</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href='#Header' className='hover:text-white'>Header</a>
                    <a href='#About' className='hover:text-white'>About us</a>
                    <a href='#Contect' className='hover:text-white'>Contect us</a>
                    <a href='#' className='hover:text-white'>Privacy Policies</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='mt-4 mb-8 text-gray-400 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-1'>
                    <input type='email' placeholder='Enter your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto w-full'></input>
                    <button className='py-2 px-4 bg-blue-500 rounded mx-2 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='text-center text-gray-500 py-4 border-t border-gray-700'>
            Copyright 2024 © GreatStack. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer