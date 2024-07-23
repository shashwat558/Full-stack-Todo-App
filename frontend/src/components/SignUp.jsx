import axios from '../axios/axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [info, setInfo] = useState({});    

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInfo({ ...info, [id]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/user/signup", info);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
        } catch (err) {
            console.log(err);
        }
    } 

    return (
        <div className='w-full h-full relative'>
            {/* Background div with absolute positioning */}
           
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className='flex flex-col md:flex-row md:justify-around h-full justify-center items-center'>
                <div className="w-2/3 flex justify-center items-center h-full">
                    <div className="max-w-lg relative flex flex-col p-4 rounded-md text-black bg-neutral-300 mt-10">
                        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
                        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Create a new account</div>
                        <form className="flex flex-col gap-3">
                            <div className="block relative"> 
                                <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                                <input 
                                    onChange={handleChange}
                                    type="text" id='email' placeholder="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"/>
                            </div>
                            <div className="block relative"> 
                                <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                                <input 
                                    onChange={handleChange}
                                    type="password" id='password' placeholder="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"/>
                            </div>
                            <div className="block relative"> 
                                <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Name</label>
                                <input 
                                    onChange={handleChange}
                                    type="text" id='name' placeholder="your name" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"/>
                            </div>
                            <div>
                                <a className="text-sm text-[#7747ff]" href="#">Forgot your password?</a>
                            </div>
                            <button 
                                onClick={handleSubmit}
                                type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Login</button>
                        </form>
                        <div className="text-sm text-center mt-[1.6rem]">
                            Already have an account yet? <span className="text-sm text-[#7747ff]"><Link to={'/signin'}>Signin</Link></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-start items-center md:w-1/3 h-full w-full'>
                    <p className='md:tracking-tighter tracking-normal max-w-80 text-gray-300 md:text-3xl text-xl leading-5'>
                        "The most difficult thing is the decision to act, the rest is merely tenacity." <div>-Amelia Earhart.</div>
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Login;
