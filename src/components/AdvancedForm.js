import { Field, Form, Formik } from "formik";
import { advanceSchema } from "../schemas";
import CustomeCheckBox from "./CustomeCheckbox";
import CustomeInput from "./customeInput";
import CustomeSelect from "./CustomeSelect";

const AdvancedForm = () => {
  const onSubmit = async (values, action) => {
    console.log(values, action);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptTos: false }}
      validationSchema={advanceSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <Form>
          <CustomeInput
            label="Username"
            name="username"
            type="text"
            placeholder="enter your username"
          />
          <CustomeSelect
            label="Job Type"
            name="jobType"
            placeholder="Select a job"
          >
            <option value="">Please Select a job</option>
            <option value="developer">developer</option>
            <option value="designer">designer</option>
            <option value="manager">Product manager</option>
            <option value="other">other</option>
          </CustomeSelect>

          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <CustomeCheckBox type="checkbox" name="acceptTos" />
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
