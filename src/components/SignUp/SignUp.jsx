import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
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
      const { email, password, checkbox } = values;
      if (checkbox) {
        createUserWithEmailAndPassword(email, password);

        if (user) {
          toast.success("Sign Up success", { id: 1 });
          navigate("/management");
        }
      } else {
        toast.error("checkbox is required", { id: 1 });
      }
    },
  });

  if (error) {
    toast.error(error.message, { id: 1 });
  }
  if (loading) {
    <p>Loading...</p>;
  }
  return (
    <>
      <div className="hero min-h-screen bg-primary">
        <div className="px-2">
          <div className="card  bg-base-100  shadow-xl md:w-96 ">
            <form onSubmit={formik.handleSubmit} className="card-body">
              <h3 className="pb-6 text-center text-3xl font-semibold text-primary">
                Sign Up Now
              </h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Email *"
                  className="input input-bordered  w-full max-w-xs rounded-full border-2 border-gray-400  py-6"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.errors.email && (
                  <p className="pl-2 pt-1 text-sm text-red-600">
                    ??? {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="password"
                  placeholder="Your Password *"
                  className="input input-bordered  w-full max-w-xs rounded-full border-2 border-gray-400 py-6"
                  {...formik.getFieldProps("password")}
                />
                {formik.errors.password && (
                  <p className="pl-2 pt-1 text-sm text-red-600">
                    ??? {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="confirmPassword"
                  placeholder="Confirm Password *"
                  className="input input-bordered w-full max-w-xs rounded-full border-2 border-gray-400 py-6"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.errors.confirmPassword && (
                  <p className="pl-2 pt-1 text-sm text-red-600">
                    ??? {formik.errors.confirmPassword}
                  </p>
                )}
              </div>

              <label className=" flex  cursor-pointer items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  {...formik.getFieldProps("checkbox")}
                />
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
                Already have an account?{" "}
                <Link to="/sign-in" className="text-primary">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
