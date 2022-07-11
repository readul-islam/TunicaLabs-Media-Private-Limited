import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoIosArrowDown } from "react-icons/io";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="bg-secondary ">
      <div className="navbar mx-auto max-w-[1580px] px-2 text-white sm:px-4 md:px-6">
        <div className="flex-1">
          <p className="text-md btn btn-ghost px-0 normal-case md:text-xl lg:text-2xl ">
            TUNICALABS MEDIA
          </p>
        </div>
        {user && (
          <div className="flex-none">
            <div className="dropdown dropdown-end px-4 md:px-8">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className=" indicator-item badge-sm rounded-full bg-accent text-white">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
              >
                <div className="card-body text-black">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block text-white">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-end dropdown ">
              <label tabIndex="0" className="cursor-pointer">
                <div className="flex items-center  space-x-3 ">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className=" text-lg md:text-xl">Rajan</p>
                    <p className="pt-2 pl-1">
                      {" "}
                      <IoIosArrowDown />
                    </p>
                  </div>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 text-black shadow"
              >
                <li>
                  <p className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </p>
                </li>
                <li>
                <label
            for="my-management"
            class=" lg:hidden"
          >
           Management
          </label>
                </li>
                <li onClick={() => signOut(auth)}>
                  <Link to="/sign-in">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
