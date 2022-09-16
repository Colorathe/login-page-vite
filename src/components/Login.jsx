import React from 'react'
import LoginImage from "../assets/LoginImage.jpg"


const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={LoginImage} alt="Login Image" />
        </div>
        <div className='bg-gray-800 flex flex-col justify-center'>
            <form action="" className='max-w-[400px] w-full mx-auto bg-gray-300 p-8 px-8 rounded-lg '>
                <h2 className='text-4xl dark:text-dark font-bold text-center uppercase'>Sign In</h2>
                <div className='flex flex-col text-gray-700 py-2'>
                    <label>Username</label>
                    <input type="text" className='rounded-lg text-gray-800 py-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none' required/>
                </div>
                <div className='flex flex-col text-gray-700 py-2'>
                    <label>Password</label>
                    <input type="password" className='rounded-lg text-gray-800 py-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none' required/>
                </div>
                <div className='flex justify-between text-gray-700 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <a href='/'>Forgot Password</a>
                </div>
                <button className='w-full my-5 py-2 bg-emerald-500 rounded shadow-lg shadow-emerald-500/40 hover:shadow-emerald-700/40'>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login