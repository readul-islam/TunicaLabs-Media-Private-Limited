import React from "react";
import { BsPersonPlusFill, BsFillPeopleFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";

const Management = () => {
  return (
    <>
      <div className="drawer-mobile drawer">
        <input id="my-management" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side border-r-2 border-black">
          <label htmlFor="my-management" className="drawer-overlay"></label>
          <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink
                to="students"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <span>
                  <BsFillPeopleFill />
                </span>
                View Student
              </NavLink>
            </li>
            <li>
              <NavLink
                to="add-student"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <span>
                  <BsPersonPlusFill />
                </span>
                Add Student{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Management;
