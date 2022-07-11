import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "./ViewStudent.css";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import StudentInfoEdit from "./StudentInfoEdit";

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [editStudent,setEditStudent] = useState(null);
  const {
    register,
    handleSubmit,
    
  } = useForm();

  //get all students
  const { isLoading, refetch } = useQuery(["students"], () =>
    fetch("https://morning-wildwood-86772.herokuapp.com/api/v1/all-students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // student delete handler
  const deleteHander = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this student"
    );
    if (confirm) {
      const { data } = await axios.delete(
        `https://morning-wildwood-86772.herokuapp.com/api/v1/student/${id}`
      );
      refetch();
      toast.success("successfully deleted", { id: 1 });
    }
  };
  //filtters student
  const onSubmit = async (values) => {
    const { Name, age, divison, school } = values;
    const { data } = await axios.get(
      `https://morning-wildwood-86772.herokuapp.com/api/v1/students?name=${Name}&age=${age}&divison=${divison}&school=${school}&class=${values.class}`
    );
    console.log(data);
    setStudents(data);
  };

  return (
    <div className="m-4 p-6 shadow-2xl md:m-6">
      {editStudent&& <StudentInfoEdit editStudent={editStudent} setEditStudent={setEditStudent} refetch={refetch}/>}
      <p className="pb-4 text-lg text-accent">View Student</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-3 lg:grid-cols-6"
      >
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered max-w-[200px] bg-gray-200"
          {...register("Name")}
        />
        <input
          type="text"
          placeholder="Age"
          className="input input-bordered max-w-[200px] bg-gray-200"
          {...register("age")}
        />
        <select
          {...register("school")}
          className="select w-full max-w-[200px]  border-gray-400 bg-gray-200"
        >
          <option disabled selected>
            School
          </option>
          <option>St. Xavier’s Collegiate School</option>
          <option>The Doon School</option>
          <option>The Shri Ram School</option>
          <option>La Martiniere For Girls School</option>
          <option>Mother’s International School</option>
          <option>Little Flower High School</option>
          <option>St. John’s High School </option>
          <option>Shree Swaminarayan Gurukul International School </option>
          <option>Greenwood International High School </option>
        </select>
        <select
          {...register("class")}
          className="select w-full max-w-[200px] border-gray-400 bg-gray-200"
        >
          <option disabled selected>
            Class
          </option>
          <option>Six</option>
          <option>Seven</option>
          <option>Eight</option>
          <option>Nine</option>
          <option>Ten</option>
          <option>BA</option>
        </select>
        <select
          {...register("divison")}
          className="select w-full max-w-[200px] border-gray-400 bg-gray-200"
        >
          <option disabled selected>
            Divison
          </option>
          <option>Kolkata</option>
          <option>Dehradun</option>
          <option>Gurugram</option>
          <option>Delhi</option>
          <option>Delhi</option>
          <option>Chandigarh</option>
          <option>Hyderabad</option>
          <option>Hyderabad</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
        <button
          type="submit"
          className="input max-w-[200px] bg-primary text-white md:px-14  "
        >
          Search
        </button>
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
          
            {students.map((d, index) => (
              <tr key={d._id}>
                <th>{index + 1}</th>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.school}</td>
                <td>{d.class}</td>
                <td>{d.divison}</td>
                <td>Active</td>
                <td>
                  {" "}
                  <a onClick={()=>setEditStudent(d)} href="#student-edit-modal" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Edit
                  
                  </a>
                </td>
                <td>
                  {" "}
                  <p
                    onClick={() => deleteHander(d._id)}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
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
