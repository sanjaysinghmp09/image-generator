import React, { useEffect, useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="login-backdrop"
        className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.form
          key="login-form"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative bg-white p-8 sm:p-10 rounded-xl shadow-lg text-slate-500 w-[90%] max-w-md"
        >
          <h1 className="text-center text-2xl text-neutral-700 font-medium">
            {state}
          </h1>

          <p className="text-sm mt-2">
            {state === "Login"
              ? "Welcome back! Please sign in to continue."
              : "Join us today! Create an account to start your journey."}
          </p>

          {state !== "Login" && (
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.profile_icon} alt="" width={21} />
              <input
                type="text"
                className="outline-none border-none text-sm w-full"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              className="outline-none border-none text-sm w-full"
              placeholder="Email ID"
              required
            />
          </div>

          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.lock_icon} alt="" />
            <input
              type="password"
              className="outline-none border-none text-sm w-full"
              placeholder="Password"
              required
            />
          </div>

          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot Password?
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-blue-600 w-full text-white py-2 rounded-full transition-all"
          >
            {state === "Login" ? "Login" : "Create Account"}
          </motion.button>

          {state === "Login" ? (
            <p className="mt-5 text-center">
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="mt-5 text-center">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login
              </span>
            </p>
          )}

          <motion.img
            whileHover={{ rotate: 90, scale: 1.1 }}
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="absolute top-5 right-5 cursor-pointer"
          />
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
