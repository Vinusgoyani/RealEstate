import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

const Contect = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42f61cb1-d529-425e-a93c-bf08e92a97b2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
    //   alert("Form Submitted Successfully")
      toast.success("message sent succesfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div initial={{opacity:0,x:-200}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            className=' text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contect'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact<span className='px-3 underline underline-offset-4 decoration-1  font-light'>With Us</span></h1>
        <p className='text-center max-w-80 mx-auto text-gray-500 mb-12'>Ready to Make a Move? Let’s Build Your Future Together</p>
        

        <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={onSubmit}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your name:
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Name' type="text" placeholder="your name" required></input>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email:
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Email' type="email" placeholder="your Email" required></input>
                </div>
            </div>
            <div className='text-left my-6 '>
                Message
                <textarea className='w-full border border-gray-300 px-3 py-2 mt-2 h-48 resize-none' name="Message" placeholder='message'  required></textarea>
            </div>
            <button className=' bg-blue-700 px-6 mb-8 py-2 rounded text-white font' >{result ? result : "Send Message"}</button>
        </form>
    </motion.div>
  )
}

export default Contect