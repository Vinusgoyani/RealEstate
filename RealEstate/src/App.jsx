import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testinomials from './components/Testinomials'
import Contect from './components/Contect'
import Footer from './components/Footer'
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <ToastContainer/>
        <Header>
        </Header>
        <About></About>
        <Project></Project>
        <Testinomials></Testinomials>
        <Contect></Contect>
        <Footer/>
      </div>
    </>
  )
}

export default App