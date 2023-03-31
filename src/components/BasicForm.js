import { useFormik } from "formik";
import { basicSchema } from "../schemas";
const BasicForm = () => {
  const onSubmit = async(values,action)=>{
    console.log(values,action);
    await new Promise((resolve)=>setTimeout(resolve,1000))
    action.resetForm()
  }
  const {values,errors,touched,handleChange,isSubmitting,handleBlur,handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      conformPassword: "",
    },
    validationSchema:basicSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error":""}
      />
      {errors.email && touched.email && <p className="error" >{errors.email}</p> }
      <label htmlFor="email">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        placeholder="Enter your age"
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error":""}

      />
      {errors.age && touched.age && <p className="error" >{errors.age}</p> }

      <label htmlFor="email">Password</label>
      <input
        onBlur={handleBlur}
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-error":""}

      />
      {errors.password && touched.password && <p className="error" >{errors.password}</p> }

      <label htmlFor="email">Conform Password</label>
      <input
        value={values.conformPassword}
        onChange={handleChange}
        id="conformPassword"
        onBlur={handleBlur}
        type="password" 
        placeholder="conform your password"
        className={errors.conformPassword && touched.conformPassword ? "input-error":""}

      />
      {errors.conformPassword && touched.conformPassword && <p className="error" >{errors.conformPassword}</p> }

      <button disabled={isSubmitting} type="submit"> Submit</button>
    </form>
  );
};
export default BasicForm;
