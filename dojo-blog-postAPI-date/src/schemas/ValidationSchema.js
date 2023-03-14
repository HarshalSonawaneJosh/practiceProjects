import { yupToFormErrors } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  title: Yup.string().min(2).max(25).required("Please enter title"),
  body: Yup.string().min(5).max(50).required("Please enter body"),
  date: Yup.string().required("Please enter date"),
});

export default signUpSchema;
