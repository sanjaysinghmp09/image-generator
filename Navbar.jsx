import React , { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';




function Navbar() {

    const { user , setShowLogin } = useContext(AppContext);



    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center py-4 '>
            <Link to="/">

                <img src={assets.logo} alt="Logo" className='w-28 sm:w-32 md:w-36 lg:w-40' />

            </Link>

            <div>

                {/* This is login div and logged in user */}

                {
                    user ?
                        <div className='flex items-center gap-2 sm:gap-4'>
                            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                                <img className='w-5' src={assets.credit_star} alt="credit" />
                                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits Left : 50</p>
                            </button>
                            <p className='text-gray-600 max-sm:hidden pl-4'>Hi, Sanjay Singh</p>
                            <div className='relative group'>
                                <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounder pt-12'>
                                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                        <li className='py-1 px-2 cursor-pointer pr-10'>
                                            Logout
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-4 sm:gap-5'>
                            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                            <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-7 text-sm rounded-full'>Login</button>
                        </div>
                }

            </div>
        </div>
    )
}

export default Navbar