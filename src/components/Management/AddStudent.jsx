import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddStudent = () => {
  const presentDate = new Date().getFullYear();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    const { Name, date, school, divison, active, invoice } = values;
    const [year, month, day] = date.split("-");
    const age = presentDate - parseInt(year);

                 
    if (Name && age&& school && divison && values.class) {
      const { data } = await axios.post(
        "https://morning-wildwood-86772.herokuapp.com/api/v1/student",
        {
          name:Name,
          age,
          school,
          class: values.class,
          divison,
         active,
         invoice
        }
      );
      console.log(data);
      toast.success("sucessfully added", { id: 1 });
    }
  };

  return (
    <div className="m-4 p-8 shadow-2xl md:m-10">
      <p className="pb-4 text-lg text-accent">Add Student</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4  md:space-y-10"
      >
        <div className="flex flex-col space-x-0 md:flex-row md:space-x-[170px] ">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs border bg-gray-200"
            {...register("Name", { required: true })}
          />
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[150px] ">
          <label>Date Of Birth</label>
          <input
            type="date"
            placeholder="Type here"
            className="input w-full max-w-xs border bg-gray-200"
            {...register("date", { required: true })}
          />
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[197px] ">
          <label>School</label>
          <select
            {...register("school", { required: true })}
            className="select  w-full max-w-xs  bg-gray-200 
          
          "
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
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[207px] ">
          <label>Class</label>
          <select
            {...register("class", { required: true })}
            className="select  w-full max-w-xs  bg-gray-200  "
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
        </div>
        <div className="flex  flex-col space-x-0 md:flex-row md:space-x-[193px] ">
          <label>Divison</label>
          <select
            {...register("divison", { required: true })}
            className="select  w-full max-w-xs bg-gray-200  "
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
        </div>
        <div className="flex  flex-col space-x-0 md:space-x-[250px]">
          <label>Status</label>

          <div className="flex items-center space-x-4 ">
            <label className=" flex cursor-pointer items-center ">
            <input type="checkbox" className="checkbox border rounded-full border-black" 
                 {...register("active")}
            
            />
              
              <span className="label-text px-4">Active</span>
            </label>
            <label className=" flex cursor-pointer items-center ">
            <input type="checkbox" className="checkbox border rounded-full border-black" 
                {...register("invoice")}
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
