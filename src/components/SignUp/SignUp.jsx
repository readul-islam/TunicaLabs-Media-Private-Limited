import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      const {email, password,  checkbox} = values;
      if(checkbox){
        createUserWithEmailAndPassword(email,password)
        toast.success('Sign Up success',{id:1})
      }else{
      
        toast.error('checkbox is required',{id:1})
        
      }


    },
  });
  console.log(user);
  return (
    <>
      <div class="hero min-h-screen bg-primary">
        <div class="px-2">
          <div class="card  md:w-96  bg-base-100 shadow-xl ">
            <form onSubmit={formik.handleSubmit} class="card-body">
              <h3 className="text-center pb-6 font-semibold text-primary text-3xl">
                Sign Up Now
              </h3>
             <div className="mb-4">
             <input
                type="text"
                placeholder="Your Email *"
                class="input input-bordered  border-gray-400 w-full border-2 py-6 rounded-full  max-w-xs"
                id="email"
                {...formik.getFieldProps("email")}
              />
                {formik.errors.email && <p className='text-sm text-red-600 pl-2 pt-1'>✴ {formik.errors.email}</p>}
             </div>
              <div className='mb-4'>
              <input
                type="text"
                id="password"
                placeholder="Your Password *"
                class="input input-bordered  border-gray-400 border-2 rounded-full py-6 w-full max-w-xs"
                {...formik.getFieldProps("password")}
              />
                  {formik.errors.password && <p className='text-sm text-red-600 pl-2 pt-1'>✴ {formik.errors.password}</p>}
              </div>
             <div className="mb-4">
             <input
                type="text"
                id="confirmPassword"
                placeholder="Confirm Password *"
                class="input input-bordered border-gray-400 border-2 rounded-full py-6 w-full max-w-xs"
                {...formik.getFieldProps("confirmPassword")}
              />
             {formik.errors.confirmPassword && <p className='text-sm text-red-600 pl-2 pt-1'>✴ {formik.errors.confirmPassword}</p>}
             </div>
              
                <label class=" flex  items-center cursor-pointer ">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-primary"
                    {...formik.getFieldProps("checkbox")}
                  />
                  <span class="label-text px-2">
                    I agree to the Terms Of Services
                  </span>
                </label>
            
              <button
                type="submit"
                class=" mt-4 cursor-pointer rounded-full text-lg font-semibold text-white py-3 w-full max-w-xs bg-primary"
              >
                Sign Up
              </button>
              <p className="text-center pt-4 font-semibold">
                {" "}
                Already have an account?{" "}
                <Link to='/sign-in' class="text-primary">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
