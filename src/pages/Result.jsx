import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react";

const Result = () => {
  const [image, setImage] = React.useState(assets.sample_img_1);
  const [isImageLoaded, setImageLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setImage(assets.sample_img_1);
      setImageLoaded(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center justify-center px-4 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Preview + Loader */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={image}
          alt="Generated Art"
          className="max-w-sm w-full rounded shadow-lg"
          animate={loading ? { opacity: 0.7, scale: 0.98 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Loading bar */}
        <motion.span
          className="absolute bottom-0 left-0 h-1 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: loading ? '100%' : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {loading && (
        <motion.p
          className="text-gray-600 mt-2 text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading...
        </motion.p>
      )}

      {/* Prompt Input + Button */}
      {!isImageLoaded && (
        <motion.div
          className="flex w-full max-w-xl bg-white mt-10 px-2 py-1 rounded-full shadow-lg border border-gray-300 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            required
            type="text"
            placeholder="Enter your prompt here..."
            className="flex-1 px-5 py-3 rounded-full bg-[#1a1a1a] text-white placeholder:text-gray-400 shadow-md outline-none border border-gray-600 focus:ring-2 focus:ring-purple-600 transition-all text-sm"
          />
          <motion.button
            type="submit"
            className="cursor-pointer ml-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate
          </motion.button>
        </motion.div>
      )}

      {/* Result Buttons */}
      {isImageLoaded && (
        <motion.div
          className="flex gap-2 flex-wrap justify-center text-white text-sm mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.p
            onClick={() => setImageLoaded(false)}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate Another
          </motion.p>
          <motion.a
  href={image}
  download
  className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 sm:px-8 sm:py-3 
             rounded-full shadow-md border border-transparent transition-all duration-300 
             flex items-center justify-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  ✅ Confirm & Continue
</motion.a>

        </motion.div>
      )}
    </motion.form>
  );
};

export default Result;
