import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const examplePrompts = [
  { category: 'Gaming Enthusiast', color: 'text-gray-500', text: "A futuristic soldier in a battle royale arena with glowing gear" },
  { category: 'Anime Lover', color: 'text-pink-500', text: "A samurai cat wearing neon sunglasses in cyber Tokyo" },
  { category: 'Art & Creativity', color: 'text-purple-600', text: "A panda DJ spinning vinyl at a jungle rave with laser lights" },
  { category: 'Rap / Hip-Hop', color: 'text-yellow-600', text: "A graffiti-style portrait of a lion rapper with golden chains" },
  { category: 'Calm & Aesthetic', color: 'text-blue-500', text: "A peaceful astronaut floating above Earth under soft moonlight" },
  { category: 'Wildcard / Trending', color: 'text-gray-500', text: "A cyberpunk tiger with glowing blue stripes in rain-soaked alley" }
];

function Header() {
  const [copiedPrompt, setCopiedPrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(text);
    setTimeout(() => setCopiedPrompt(''), 2000);
  };

  const handleImageClick = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <motion.div
      className='flex flex-col justify-center items-center text-center my-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
      }}
    >
      {/* Tagline */}
      <motion.div
        className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 shadow-sm'
        whileHover={{ scale: 1.05 }}
      >
        <p>Wear, What You Imagine...</p>
        <motion.img
          src={assets.star_icon}
          alt=""
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl max-w-[90%] sm:max-w-3xl mx-auto mt-12 font-extrabold leading-tight tracking-tight"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Got an idea?{' '}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Imagine it
        </span>.{' '}
        <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          Wear it
        </span>.
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center max-w-xl mx-auto mt-5 text-lg leading-relaxed font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold italic">Design your imagination</span> into
        <span className="font-semibold"> wearable art</span>. Create
        <span className="font-semibold"> custom AI-generated T-shirts</span> that express your style.
        Fast, easy, and <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
          uniquely you
        </span> – bring your ideas to life and wear them proudly.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={onClickHandler}
        className="mt-6 px-6 py-3 flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        Create Design
        <motion.img
          src={assets.star_group}
          alt="spark"
          className="w-6 h-6"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        />
      </motion.button>

      {/* Sample Images */}
      <motion.div
        className='flex flex-wrap justify-center gap-4 mt-10 relative'
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <p className='w-full text-center text-sm sm:text-base text-gray-600 px-4 max-w-md mx-auto mb-4'>
          These are sample T-shirt designs generated using AI for preview.
        </p>
        {Array(4).fill('').map((_, index) => (
          <motion.img
            key={index}
            src={assets.sample_img_1}
            alt=""
            className='rounded max-sm:w-16 sm:w-20 cursor-pointer'
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => handleImageClick(assets.sample_img_1)}
          />
        ))}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg" />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 cursor-pointer"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Prompt Examples */}
      <motion.div
        className="mt-10 w-full px-4 sm:px-8 lg:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
            🎯 Try Prompts Based on Your Vibe
          </h3>
          <motion.div
            className="grid sm:grid-cols-2 gap-5 text-sm sm:text-base"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {examplePrompts.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-2 relative"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className={`text-xs uppercase ${item.color} tracking-wide`}>
                  {item.category}
                </p>
                <motion.button
                  onClick={() => handleCopy(item.text)}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg text-left border border-gray-300 font-medium w-full flex justify-between items-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="w-[90%]">{item.text}</span>
                  <span className="text-gray-500 text-xs">
                    {copiedPrompt === item.text ? '✅' : '📋'}
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
