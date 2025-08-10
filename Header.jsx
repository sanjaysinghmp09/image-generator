import React, { useState } from 'react';
import { assets } from '../assets/assets';

const examplePrompts = [
  {
    category: 'Gaming Enthusiast',
    color: 'text-gray-500',
    text: "A futuristic soldier in a battle royale arena with glowing gear"
  },
  {
    category: 'Anime Lover',
    color: 'text-pink-500',
    text: "A samurai cat wearing neon sunglasses in cyber Tokyo"
  },
  {
    category: 'Art & Creativity',
    color: 'text-purple-600',
    text: "A panda DJ spinning vinyl at a jungle rave with laser lights"
  },
  {
    category: 'Rap / Hip-Hop',
    color: 'text-yellow-600',
    text: "A graffiti-style portrait of a lion rapper with golden chains"
  },
  {
    category: 'Calm & Aesthetic',
    color: 'text-blue-500',
    text: "A peaceful astronaut floating above Earth under soft moonlight"
  },
  {
    category: 'Wildcard / Trending',
    color: 'text-gray-500',
    text: "A cyberpunk tiger with glowing blue stripes in rain-soaked alley"
  }
];

function Header() {
  const [copiedPrompt, setCopiedPrompt] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(text);

    // Clear feedback after 2 seconds
    setTimeout(() => {
      setCopiedPrompt('');
    }, 2000);
  };

  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      {/* Tagline */}
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Wear, What You Imagine... </p>
        <img src={assets.star_icon} alt="" />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl max-w-[90%] sm:max-w-3xl mx-auto mt-12 text-center font-extrabold leading-tight tracking-tight">
        Got an idea?{' '}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Imagine it
        </span>.{' '}
        <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          Wear it
        </span>.
      </h1>

      {/* Description */}
      <p className="text-center max-w-xl mx-auto mt-5 text-lg leading-relaxed font-medium">
        <span className="font-semibold italic">Design your imagination</span> into
        <span className="font-semibold"> wearable art</span>. Create
        <span className="font-semibold"> custom AI-generated T-shirts</span> that express your style.
        Fast, easy, and <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
          uniquely you
        </span> – bring your ideas to life and wear them proudly.
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
        Create Design
        <img src={assets.star_group} alt="spark" className="w-6 h-6 animate-pulse" />
      </button>

      {/* cta button below images using gpt  */}

      
      <div className='flex flex-wrap justify-center gap-4 mt-10 relative'>
        {/* Text Upar */}
        <p className='w-full text-center text-sm sm:text-base text-gray-600 px-4 max-w-md mx-auto mb-4'>
          These are sample T-shirt designs generated using AI for preview.
        </p>

        {/* Images Neeche */}
        {Array(4).fill('').map((item, index) => (
          <img
            key={index}
            src={assets.sample_img_1}
            alt=""
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-16 sm:w-20'
            onClick={(e) => {
              const zoomedImg = document.createElement('div');
              zoomedImg.style.position = 'fixed';
              zoomedImg.style.top = 0;
              zoomedImg.style.left = 0;
              zoomedImg.style.width = '100vw';
              zoomedImg.style.height = '100vh';
              zoomedImg.style.background = 'rgba(0,0,0,0.8)';
              zoomedImg.style.display = 'flex';
              zoomedImg.style.alignItems = 'center';
              zoomedImg.style.justifyContent = 'center';
              zoomedImg.style.zIndex = 9999;

              const img = document.createElement('img');
              img.src = e.target.src;
              img.style.maxWidth = '90%';
              img.style.maxHeight = '90%';
              img.style.borderRadius = '10px';
              img.style.boxShadow = '0 0 20px rgba(255,255,255,0.2)';
              img.style.zIndex = 10000;

              // Agar screen ke empty area pe click kare, to image close ho jaye
              zoomedImg.addEventListener('click', (event) => {
                if (event.target === zoomedImg) {
                  zoomedImg.remove();
                }
              });

              zoomedImg.appendChild(img);
              document.body.appendChild(zoomedImg);
            }}
          />
        ))}
      </div>

      {/* here chatgpt use  */}

      {/* Prompt Examples */}
      <div className="mt-10 w-full px-4 sm:px-8 lg:px-0">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
            🎯 Try Prompts Based on Your Vibe
          </h3>

          <div className="grid sm:grid-cols-2 gap-5 text-sm sm:text-base">
            {examplePrompts.map((item, index) => (
              <div key={index} className="space-y-2 relative">
                <p className={`text-xs uppercase ${item.color} tracking-wide`}>
                  {item.category}
                </p>
                <button
                  onClick={() => handleCopy(item.text)}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg text-left transition-all duration-200 border border-gray-300 font-medium w-full flex justify-between items-center"
                >
                  <span className="w-[90%]">{item.text}</span>
                  <span className="text-gray-500 text-xs hover:text-black transition-colors duration-150">
                    {copiedPrompt === item.text ? '✅' : '📋'}
                  </span>
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
