import React from "react";

import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="hero min-h-screen bg-primary">
        <div className="px-2">
          <div className="card bg-base-100 shadow-xl md:w-96 ">
            <form className="card-body">
              <h3 className="pb-6 text-center text-3xl font-semibold text-primary">
                Sign In Now
              </h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Email *"
                  className="input input-bordered  w-full max-w-xs rounded-full border-2 border-gray-400  py-6"
                  id="email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="password"
                  placeholder="Your Password *"
                  className="input input-bordered  w-full max-w-xs rounded-full border-2 border-gray-400 py-6"
                />
              </div>
              <label className=" flex  cursor-pointer items-center ">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text px-2">
                  I agree to the Terms Of Services
                </span>
              </label>
              <button
                type="submit"
                className=" mt-4 w-full max-w-xs cursor-pointer rounded-full bg-primary py-3 text-lg font-semibold text-white"
              >
                Sign Up
              </button>
              <p className="pt-4 text-center font-semibold">
                {" "}
                Don’t have an account?{" "}
                <Link to="/sign-up" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
