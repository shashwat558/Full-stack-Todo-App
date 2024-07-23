const axios = require("../axios/axios")
import React, { useState } from 'react'




const Login = () => {
    const [info, setInfo] = useState({});    

    const handleChange = (e) => {
        const {id, value} = e.target;
        setInfo({...info, [id]: value});

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("/user/login", info)
        }
    } 


  return (

    <div className='w-full h-full flex justify-around flex-wrap'>
        {info}
         <div className="w-2/3  flex justify-center items-center h-full">
        <div className="max-w-lg relative flex flex-col p-4 rounded-md text-black bg-neutral-300">
    <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
    <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
<form className="flex flex-col gap-3">
    <div className="block relative"> 
    <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
    <input 
    onChange={handleChange}
    type="text" id='email' placeholder="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"/>
    
    </div>
    <div className="block relative"> 
    <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
    <input 
    onChange={handleChange}
    type="password" id='password' placeholder="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"/>
    
    </div>
    <div className="block relative"> 
    <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">name</label>
    <input 
    onChange={handleChange}
    type="text" id='name' placeholder="your name" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"/>
    
    </div>
    <div>
    <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
    </a></div>
    <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Login</button>

</form>
<div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div>
</div>

    </div>
    <div className='flex justify-start items-center w-1/3 h-full flex-wrap'>
        <p className='tracking-tighter max-w-80 text-gray-300 text-3xl'>
        "The most difficult thing is the decision to act, the rest is merely tenacity." <div>-Amelia Earhart.</div>
        </p>
    </div>
    </div>

   
  )
}



export default Login