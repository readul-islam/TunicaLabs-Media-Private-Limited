import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
     
      <input
        {...field}
        {...props}
        className="Field w-full max-w-xs border bg-gray-200"
      />
     
    </>
  );
};
export default CustomInput;