import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPwd] = useState('');
  const navigate = useNavigate();

  const handleLog = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://127.0.0.1:3001/api/login", { mail, password });
      console.log(res);
      if (res.status === 200) {
        navigate('/dashboard'); // Navigate to dashboard after successful login
      }
    } catch (error) {
      
      console.error('Login failed', error);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div
            className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
          >
            <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
              Log in
            </h1>
            <form  className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                <input
                  id="email"
                  className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                <input
                  id="password"
                  className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <a
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Forget your password?
                </span>
              </a>
              <button
                className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
                onClick={handleLog}
              >
                LOG IN
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3 className="dark:text-gray-300">
                Don't have an account?
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="#"
                  onClick={() => navigate('/signup')}
                >
                  <span
                    className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Sign Up
                  </span>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
