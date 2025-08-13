import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
};

function Steps() {
  return (
    <motion.div
      className='flex flex-col items-center text-center my-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h1
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.1 }}
      >
        How it works
      </motion.h1>

      <motion.p
        className='text-lg text-gray-600 mb-8'
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform your ideas into wearable art with our AI-powered design tool.
      </motion.p>

      {/* Steps */}
      <motion.div
        className='space-y-4 w-full max-w-3xl text-sm'
        variants={containerVariants}
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border rounded-lg'
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)"
            }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <motion.img
              width={40}
              src={item.icon}
              alt=""
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-500'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Steps;
