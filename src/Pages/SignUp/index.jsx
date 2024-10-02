import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center mt-20'>
            <div className='border-2 border-indigo-500 rounded-lg p-4 shadow-lg shadow-indigo-400/50 w-72 md:w-96'>
                <h1 className='text-4xl font-bold text-indigo-500 text-center'>Sign Up</h1>
                <form className='flex flex-col gap-4 mt-4'>
                    <label className='flex flex-col gap-1'>
                        <span className='text-indigo-500 text-lg'>Email</span>
                        <input type='email' className='border-2 border-indigo-500 rounded-lg p-2 focus:outline-0 shadow-md shadow-indigo-400/30' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <span className='text-indigo-500 text-lg'>Password</span>
                        <input type='password' className='border-2 border-indigo-500 rounded-lg p-2 focus:outline-0 shadow-md shadow-indigo-400/30' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <span className='text-indigo-500 text-lg'>Confirm Password</span>
                        <input type='password' className='border-2 border-indigo-500 rounded-lg p-2 focus:outline-0 shadow-md shadow-indigo-400/30' />
                    </label>
                    <button className='bg-indigo-500 text-white rounded-lg p-2'>Sign Up</button>
                </form>
            </div>

            <div>
                <p className='text-center mt-4'>You already have an account?
                    <Link to='/sign-in' className='text-indigo-500 font-semibold ps-1'>Sign In</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp;