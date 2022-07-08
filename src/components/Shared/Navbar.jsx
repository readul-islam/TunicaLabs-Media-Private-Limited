import React from "react";
import { useAuthState  } from "react-firebase-hooks/auth";
import { IoIosArrowDown } from "react-icons/io";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import {  signOut } from 'firebase/auth';
const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="bg-secondary ">
      <div class="navbar text-white max-w-[1580px] mx-auto md:px-6 sm:px-4 px-2">
        <div class="flex-1">
          <p class="btn btn-ghost normal-case text-md md:text-xl lg:text-2xl px-0 ">
            TUNICALABS MEDIA
          </p>
        </div>
       {
        user &&  <div class="flex-none">
        <div class="dropdown dropdown-end px-4 md:px-8">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class=" badge-sm indicator-item bg-accent rounded-full text-white">
                8
              </span>
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body text-black">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block text-white">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end ">
        <label tabindex="0" class='cursor-pointer' >
         <div  class="flex items-center  space-x-3 ">
         <div class="avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
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
         <ul tabindex="0" class="dropdown-content menu mt-4 p-2 text-black shadow bg-base-100 rounded-box w-52">
         <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={()=>   signOut(auth)}><Link to='/sign-in'>Logout</Link></li>
  </ul>
        </div>
      </div>
       }
      </div>
    </nav>
  );
};

export default Navbar;
