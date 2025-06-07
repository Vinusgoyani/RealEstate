import React from 'react';
// import {assets} from "../src/assets";
import logo from "../assets/logo.svg";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.svg";
import { useState } from 'react';
import { useEffect } from 'react';

export const Navbar = () => {
    const [showmobile,setshowmobile]=useState(false);

    useEffect(()=>{
        if(showmobile){
            document.body.style.overflow='hidden';
        }else{
            document.body.style.overflow='auto';
        }
        return()=>{
            document.body.style.overflow='auto';
        }
    },[showmobile])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={logo} alt="" className='bg-black-100'/>
            <ul className='hidden md:flex gap-10 text-white'>
                <a href="#Header" className="cursor-pointer hover:text-gray-400 text-2xl font-light">Home</a>
                <a href="#About" className="cursor-pointer hover:text-gray-400 text-2xl font-light">About</a>
                <a href="#Project" className="cursor-pointer hover:text-gray-400 text-2xl font-light">Projects</a>
                <a href="#Testinomials" className="cursor-pointer hover:text-gray-400 text-2xl font-light">Testinomials</a>
            </ul>
            <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
            <img onClick={()=>setshowmobile(true)} src={menu_icon} className="md:hidden w-7"></img>
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${showmobile ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=>setshowmobile(false)} src={cross_icon} className='w-6'></img>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={()=>setshowmobile(false)} href='#Header' className='px-4 py-2 rounded-full inline-block ' >Home</a>
                <a onClick={()=>setshowmobile(false)} href='#About' className='px-4 py-2 rounded-full inline-block '>About</a>
                <a onClick={()=>setshowmobile(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block '>Projects</a>
                <a onClick={()=>setshowmobile(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block '>Testimonials</a>
            </ul>
        </div>        
    </div>

    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
    //     <p className="text-lg mt-4 text-gray-700">
    //       This is a simple example using Tailwind CSS for styling.
    //     </p>
    //     <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
    //       Click Me
    //     </button>
    //   </div>
    // </div>
  )
}
