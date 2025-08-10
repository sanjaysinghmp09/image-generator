import React from 'react';
import { assets } from '../assets/assets';

const Result = () => {

  const [image, setImage] = React.useState(assets.sample_img_1);

  const [isImageLoaded, setImageLoaded] = React.useState(false);

  const [loading , setLoading] = React.useState(false);

  const [input , setInput] = React.useState('');

  const onSubmitHandler = async (e) => {
    
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center px-4 py-10">

      {/* Image Preview + Loader */}
      <div>
        <div className="relative">
          <img
            src={assets.sample_img_1}
            alt="Generated Art"
            className="max-w-sm w-full rounded shadow-lg"
          />
          <span className= {`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} `}/>
        </div>


        <p className={`text-gray-600 mt-2 text-sm text-center ${!loading ? 'hidden' : ''}`}>
  Loading...
</p>

      </div>

      {/* Prompt Input + Button */}

      {!isImageLoaded &&
        <div className="flex w-full max-w-xl bg-white mt-10 px-2 py-1 rounded-full shadow-lg border border-gray-300 items-center">
          <input
            onChange={(e) => setInput(e.target.value)} value={input}
            required
            type="text"
            placeholder="Enter your prompt here..."
            className="flex-1 px-5 py-3 rounded-full bg-[#1a1a1a] text-white placeholder:text-gray-400 shadow-md outline-none border border-gray-600 focus:ring-2 focus:ring-purple-600 transition-all text-sm"
          />
          <button
            type="submit"
            className="cursor-pointer ml-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm rounded-full shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
          >
            Generate
          </button>
        </div>
      }


      {/* Result Image */}


      {isImageLoaded &&

        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.s mt-10 rounded-full'>
          <p onClick={() => {setImageLoaded(false)}} 
          className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={image} download className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Download</a>
        </div>
      }
    </form>
  );
};

export default Result;