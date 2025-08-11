import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'motion/react';

const enhancedPlans = [
  {
    id: 'Basic Plan',
    description: 'Ideal for casual wear and testing designs.',
    price: 10,
    credits: 5,
    designs: 10,
    delivery: '8-10 Days',
    features: [
      'Standard cotton fabric',
      'Basic print quality',
      'No return policy',
    ],
  },
  {
    id: 'Premium Plan',
    description: 'Better quality and faster shipping for regular users.',
    price: 25,
    credits: 15,
    designs: 20,
    delivery: '5-6 Days',
    features: [
      'High-quality fabric blend',
      'Advanced color printing',
      '7-day return policy',
    ],
  },
  {
    id: 'Elite Plan',
    description: 'Pro-level printing, fastest delivery & return flexibility.',
    price: 50,
    credits: 35,
    designs: 50,
    delivery: '2-3 Days',
    features: [
      'Luxury-grade fabric',
      '3D print + AI texture placement',
      'Free return & size exchange',
      'Fast delivery included',
    ],
  },
];

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10 bg-[#f7f7f7] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        className="border border-gray-400 px-10 py-2 rounded-full mb-6 text-sm hover:bg-black hover:text-white transition"
        whileHover={{ scale: 1.05 }}
      >
        Our Plans
      </motion.button>

      <motion.h1
        className="text-center text-3xl font-semibold mb-6 sm:mb-4 text-gray-900"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Generate more AI designs by upgrading your plan
      </motion.h1>

      <motion.p
        className="text-sm text-gray-500 mb-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Design limits, fabric quality, delivery speed, and return policy — all get better with higher plans.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {enhancedPlans.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white drop-shadow-md border border-gray-200 rounded-2xl py-10 px-8 text-gray-700 max-w-xs"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 25px rgba(0,0,0,0.15)' }}
          >
            <motion.img
              width={40}
              src={assets.logo_icon}
              alt=""
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <p className="mt-4 mb-1 font-semibold text-gray-900 text-lg">{item.id}</p>
            <p className="text-sm mb-4">{item.description}</p>

            <ul className="text-sm text-gray-600 space-y-1 mb-4 list-disc list-inside">
              <li>
                <strong>{item.designs}</strong> AI Design Generations
              </li>
              <li>
                Delivery in <strong>{item.delivery}</strong>
              </li>
              {item.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <p className="text-gray-800 mt-4">
              <span className="text-3xl font-bold text-black">${item.price}</span> / {item.credits} credits
            </p>

            <motion.button
              className="cursor-pointer w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-6 text-sm rounded-full py-2.5 min-w-52 font-medium shadow-md"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              {user ? 'Purchase' : 'Get Started'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
