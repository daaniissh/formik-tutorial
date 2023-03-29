import { useFormik } from "formik";
const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      conformPassword: "",
    },
  });
  console.log(formik);
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <label htmlFor="email">Age</label>
      <input
        value={formik.values.age}
        onChange={formik.handleChange}
        id="age"
        type="number"
        placeholder="Enter your age"
        onBlur={formik.handleBlur}
      />
      <label htmlFor="email">Password</label>
      <input
        onBlur={formik.handleBlur}
        value={formik.values.password}
        onChange={formik.handleChange}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <label htmlFor="email">Conform Password</label>
      <input
        value={formik.values.conformPassword}
        onChange={formik.handleChange}
        id="conformPassword"
        onBlur={formik.handleBlur}
        type="password" 
        placeholder="conform your password"
      />
      <button type="submit"> Submit</button>
    </form>
  );
};
export default BasicForm;
