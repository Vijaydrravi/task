import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [mail, setMail] = useState('');
  const [password, setPwd] = useState('');
  const navigate = useNavigate();

  const handleSign = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:3001/api/signup', { mail, password });
      console.log(res);

      if (res.status === 200) {
        navigate('/login'); // Redirect to Login after successful signup
      }
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="flex font-poppins items-center justify-center min-w-screen min-h-screen">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div
            className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
          >
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
              Sign Up
            </h1>
            <form onSubmit={handleSign} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                <input
                  id="email"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
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
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">Have an account?</span>
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="#"
                  onClick={() => navigate('/login')}
                >
                  <span
                    className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Log In
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

export default SignUp;
