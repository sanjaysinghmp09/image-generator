import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { assets } from '../assets/assets';

const TShirt = ({ imageURL }) => {
  const { scene } = useGLTF('/assets/tshirt_model.glb');
  const texture = useLoader(THREE.TextureLoader, imageURL);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  return <primitive object={scene} scale={2.5} position={[0, -1.5, 0]} />;
};

const TshirtViewer = ({ imageURL }) => {
  return (
    <div className="w-full h-[500px] bg-black rounded-xl overflow-hidden mt-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <TShirt imageURL={imageURL} />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Result = () => {
  const [prompt, setPrompt] = useState('');
  const [imageURL, setImageURL] = useState('/assets/sample_img_1.jpg'); // default image

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real generation logic
    setImageURL('/assets/sample_img_1.jpg'); // For now using same image as placeholder
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-4 py-10">

      {/* Image Preview + Loader */}
      <div>
        <div className="relative">
          <img
            src={imageURL}
            alt="Generated Art"
            className="max-w-sm w-full rounded shadow-lg"
          />
          <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]" />
        </div>
        <p className="text-gray-600 mt-2 text-sm text-center">Loading...</p>
      </div>

      {/* Prompt Input + Button */}
      <div className="flex w-full max-w-xl bg-white mt-10 px-2 py-1 rounded-full shadow-lg border border-gray-300 items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
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

      {/* Buttons */}
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm mt-10'>
        <p className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a href={imageURL} download className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Download</a>
      </div>

      {/* 3D T-Shirt Viewer */}
      <TshirtViewer imageURL={imageURL} />

    </form>
  );
};

export default Result;


import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { assets } from '../assets/assets';


const TShirt = ({ imageURL }) => {
  const { scene } = useGLTF({ url: assets.tshirt_model });
  const texture = useLoader(THREE.TextureLoader, imageURL);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  return <primitive object={scene} scale={2.5} position={[0, -1.5, 0]} />;
};

const TshirtViewer = ({ imageURL }) => {
  return (
    <div className="w-full h-[500px] bg-black rounded-xl overflow-hidden mt-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <TShirt imageURL={imageURL} />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Result = () => {
  const [prompt, setPrompt] = useState('');
  const [imageURL, setImageURL] = useState('/assets/sample_img_1.jpg'); // default image

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real generation logic
    setImageURL('/assets/sample_img_1.jpg'); // For now using same image as placeholder
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-4 py-10">

      {/* Image Preview + Loader */}
      <div>
        <div className="relative">
          <img
            src={imageURL}
            alt="Generated Art"
            className="max-w-sm w-full rounded shadow-lg"
          />
          <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]" />
        </div>
        <p className="text-gray-600 mt-2 text-sm text-center">Loading...</p>
      </div>

      {/* Prompt Input + Button */}
      <div className="flex w-full max-w-xl bg-white mt-10 px-2 py-1 rounded-full shadow-lg border border-gray-300 items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
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

      {/* Buttons */}
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm mt-10'>
        <p className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a href={imageURL} download className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Download</a>
      </div>

      {/* 3D T-Shirt Viewer */}
      <TshirtViewer imageURL={imageURL} />

    </form>
  );
};

export default Result;
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { assets } from '../assets/assets';


const TShirt = ({ imageURL }) => {
  const { scene } = useGLTF({ url: assets.tshirt_model });
  const texture = useLoader(THREE.TextureLoader, imageURL);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  return <primitive object={scene} scale={2.5} position={[0, -1.5, 0]} />;
};

const TshirtViewer = ({ imageURL }) => {
  return (
    <div className="w-full h-[500px] bg-black rounded-xl overflow-hidden mt-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <TShirt imageURL={imageURL} />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Result = () => {
  const [prompt, setPrompt] = useState('');
  const [imageURL, setImageURL] = useState('/assets/sample_img_1.jpg'); // default image

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real generation logic
    setImageURL('/assets/sample_img_1.jpg'); // For now using same image as placeholder
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-4 py-10">

      {/* Image Preview + Loader */}
      <div>
        <div className="relative">
          <img
            src={imageURL}
            alt="Generated Art"
            className="max-w-sm w-full rounded shadow-lg"
          />
          <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]" />
        </div>
        <p className="text-gray-600 mt-2 text-sm text-center">Loading...</p>
      </div>

      {/* Prompt Input + Button */}
      <div className="flex w-full max-w-xl bg-white mt-10 px-2 py-1 rounded-full shadow-lg border border-gray-300 items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
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

      {/* Buttons */}
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm mt-10'>
        <p className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a href={imageURL} download className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Download</a>
      </div>

      {/* 3D T-Shirt Viewer */}
      <TshirtViewer imageURL={imageURL} />

    </form>
  );
};

export default Result;
