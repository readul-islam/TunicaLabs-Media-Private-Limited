import React from "react";
import "./ViewStudent.css";

const ViewStudents = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="m-4 p-6 shadow-2xl md:m-6">
      <p className="pb-4 text-lg text-accent">View Student</p>
      <form className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-3 lg:grid-cols-6">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered max-w-[200px] bg-gray-200"
        />
        <input
          type="text"
          placeholder="Age"
          className="input input-bordered max-w-[200px] bg-gray-200"
        />
        <select className="select w-full max-w-[200px]  border-gray-400 bg-gray-200">
          <option disabled selected>
            School
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
        <select className="select w-full max-w-[200px] border-gray-400 bg-gray-200">
          <option disabled selected>
            Class
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
        <select className="select w-full max-w-[200px] border-gray-400 bg-gray-200">
          <option disabled selected>
            Divison
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
        <input
          type="submit"
          value="Search"
          className="input max-w-[200px] bg-primary text-white md:px-14  "
        />
      </form>
      <div className="relative overflow-x-auto rounded-lg border-2">
        <table className="table  w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>ID'v</th>
              <th>Name</th>
              <th>Age</th>
              <th>School</th>
              <th>Class</th>
              <th>Divison</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={index}>
                <th>{index}</th>
                <td>Student name</td>
                <td>10</td>
                <td>Model School</td>
                <td>3</td>
                <td>A</td>
                <td>Active</td>
                <td>
                  {" "}
                  <p className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Edit
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Delete
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 w-full items-center justify-between md:flex ">
        <button className="btn bg-primary text-sm    font-semibold text-white  md:text-xl ">
          Download Excel ⏬
        </button>
        <div className="btn-group  gap-4 pt-4 md:pt-0  ">
          <button className="btn btn-sm text-lg text-white">«</button>
          <button className="btn btn-active btn-sm text-white">1</button>
          <button className="btn btn-sm text-white">2</button>
          <button className="btn btn-sm text-white">3</button>
          <button className="btn btn-sm text-lg text-white">»</button>
        </div>
      </div>
    </div>
  );
};

export default ViewStudents;
