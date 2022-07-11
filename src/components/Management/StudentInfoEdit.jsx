import axios from "axios";
import React from "react";
import { useState } from "react";

import toast from "react-hot-toast";

const StudentInfoEdit = ({ editStudent, refetch, setEditStudent }) => {
  console.log(editStudent);
  const { _id, name, age, school, divison } = editStudent;
  const [studentData, setStudentData] = useState({
    name: name,
    age: age,
    school: school,
    divison: divison,
    study: editStudent.class,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.patch(
      `https://morning-wildwood-86772.herokuapp.com/api/v1/student/${_id}`,
      {
        name: studentData.name,
        age: studentData.age,
        school: studentData.school,
        divison: studentData.divison,
        class: studentData.study,
      }
    );
    refetch();
    setEditStudent(null);
    toast.success("Updated Successfully!");
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    const { name, ...rest } = studentData;
    const newName = event.target.value;
    const newInfo = { name: newName, ...rest };
    setStudentData(newInfo);
  };

  const handleAgeChange = (event) => {
    console.log(event.target.value);
    const { age, ...rest } = studentData;
    const newAge = event.target.value;
    const newInfo = { age: newAge, ...rest };
    setStudentData(newInfo);
  };
  const handleSchoolChange = (event) => {
    console.log(event.target.value);
    const { school, ...rest } = studentData;
    const newSchool = event.target.value;
    const newInfo = { school: newSchool, ...rest };
    setStudentData(newInfo);
  };
  const handleClassChange = (event) => {
    console.log(event.target.value);
    const { study, ...rest } = studentData;
    const newStudy = event.target.value;
    const newInfo = { study: newStudy, ...rest };
    setStudentData(newInfo);
  };
  const handleDivisonChange = (event) => {
    console.log(event.target.value);
    const { divison, ...rest } = studentData;
    const newDivison = event.target.value;
    const newInfo = { divison: newDivison, ...rest };
    setStudentData(newInfo);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="modal flex flex-col "
        id="student-edit-modal"
      >
        <div className="modal-action absolute top-6  z-50">
          <a href="#" className="btn btn-circle btn-sm absolute right-2 top-2">
            ✕
          </a>
        </div>
        <div className="modal-action absolute   bottom-[60px] z-50">
          <button href="#" className="btn sticky w-72  text-white">
            Save
          </button>
        </div>
        <div className="modal-box ">
          <div>
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
              value={studentData.name}
              onChange={handleNameChange}
            />

            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              value={studentData.age}
              onChange={handleAgeChange}
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">School</span>
            </label>
            <input
              value={studentData.school}
              onChange={handleSchoolChange}
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Class</span>
            </label>
            <input
              value={studentData.study}
              onChange={handleClassChange}
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />

            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              value={studentData.divison}
              onChange={handleDivisonChange}
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />

            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full `}
            />
            <label className="label">
              <span className="label-text">Divison</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered mb-10 w-full `}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default StudentInfoEdit;
