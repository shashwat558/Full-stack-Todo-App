import axios from '../Axios/axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Context from '../Context/Context';


const Login = () => {
    const navigate = useNavigate(); 

    const [info, setInfo] = useState({});  
    const {setName} = useContext(Context) 
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setInfo({ ...info, [id]: value });
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setName(info)
        try {
            const response = await axios.post("/user/login", info);
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate('/todos')
        } catch (err) {
            console.log(err);
        }
    } 

    return (
        <div className='w-full h-full relative overflow-hidden'>
            {/* Background div with absolute positioning */}
           
            <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

            <div className='flex flex-col md:flex-row md:justify-around h-full items-center '>
                <div className="md:w-1/2 flex justify-center items-center h-full">
                    <div className="max-w-lg relative flex flex-col p-4 rounded-md text-black bg-neutral-300 md:mt-20 mt-20">
                        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
                        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
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
                            Don’t have an account yet? <span className="text-sm text-[#7747ff]"><Link to={'/signup'}>Sign up for Free</Link></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:pl-10 items-center md:w-1/2 h-full w-full md:mt-20 mt-20'>
                    <p className='md:tracking-tighter tracking-normal max-w-80 text-gray-300 md:text-3xl text-xl leading-5'>
                        "The most difficult thing is the decision to act, the rest is merely tenacity." <div>-Amelia Earhart.</div>
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Login;
