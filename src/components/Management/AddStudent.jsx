import React from "react";

const AddStudent = () => {
  return (
    <div className="m-4 p-8 shadow-2xl md:m-10">
      <p className="pb-4 text-lg text-accent">Add Student</p>
      <form className="space-y-4  md:space-y-10">
        <div className="flex flex-col space-x-0 md:flex-row md:space-x-[170px] ">
          <label >Full Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs border bg-gray-200"
          />
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[150px] ">
          <label >Date Of Birth</label>
          <input
            type="date"
            placeholder="Type here"
            className="input w-full max-w-xs border bg-gray-200"
          />
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[197px] ">
          <label >School</label>
          <select className="select  w-full max-w-xs  bg-gray-200  ">
            <option disabled selected></option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[207px] ">
          <label >Class</label>
          <select className="select  w-full max-w-xs  bg-gray-200  ">
            <option disabled selected></option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[193px] ">
          <label >Divison</label>
          <select className="select  w-full max-w-xs bg-gray-200  ">
            <option disabled selected></option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
        <div className="flex  flex-col space-x-0 md:space-x-[250px]">
          <label >Status</label>

          <div className="flex items-center space-x-4 ">
            <label className=" flex cursor-pointer items-center ">
              <input
                type="radio"
                name="radio-4"
                className="radio border border-black "
              />
              <span className="label-text px-4">Active</span>
            </label>
            <label className=" flex cursor-pointer items-center ">
              <input
                type="radio"
                name="radio-4"
                className="radio border border-black"
              />
              <span className="label-text px-4">Invoice</span>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary my-10 max-w-[210px] rounded px-24 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
