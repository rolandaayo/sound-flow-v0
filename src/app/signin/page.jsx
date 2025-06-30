"use client";

import React, { useState } from "react";

const SignInPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle sign-in logic (API call, etc.)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold">Signed in! (Demo only)</div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#FAE62F] focus:border-[#FAE62F] focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#FAE62F] focus:border-[#FAE62F] focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#FAE62F] hover:bg-white hover:border-[#FAE62F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAE62F]"
              >
                Sign In
              </button>
            </div>
          </form>
        )}
        <div className="text-center text-sm text-gray-500 mt-4">
          Don't have an account? <a href="/sign-up" className="text-[#FAE62F] hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
