import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function GenerateBtn() {

  const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();
  
    const onClickHandler = () => {
      if (user) {
        navigate('/result');
      } else {
        setShowLogin(true);
      }
    };

  return (
    <div className='pb-14 text-center'>
        <h1 className='text-2xl md:text-3xl lg-text-4xl mt-2 font-semibold text-neutral-800 py-3 md:py-12' >See the magic. Try it now!</h1>
        <button onClick={onClickHandler} className="nline-flex itens-center mt-4 px-6 py-3 items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
        Create Design
        <img src={assets.star_group} alt="spark" className="h-6 animate-pulse" />
      </button>
    </div>
  )
}

export default GenerateBtn