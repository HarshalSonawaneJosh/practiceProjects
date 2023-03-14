//Create a task form with title, description, assignee and due date fields
import { useFormik } from "formik";
import signUpSchema from "./schemas/ValidationSchema";
import useLoginFormFormik from "./hooks/useLoginFormFormik";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";

const initialValues = {
  title: "",
  body: "",
  author: "mario",
  date: "",
  status: "completed",
};
const CreateBlogForm = () => {
  const history = useHistory();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
        mutate(values);
        history.go(-1);
      },
    });
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries("key");
  };

  const { mutate } = useLoginFormFormik(onSuccess);

  return (
    <form onSubmit={handleSubmit}>
      <div className="blog-details">
        <label htmlFor="title">Title: </label>
        <input
          type="title"
          name="title"
          placeholder="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.title && touched.title ? (
          <p className="form-errors">{errors.title}</p>
        ) : null}
      </div>
      <div className="blog-details">
        <label htmlFor="body">Body: </label>
        <input
          type="body"
          name="body"
          placeholder="body"
          value={values.body}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.body && touched.body ? (
          <p className="form-errors">{errors.body}</p>
        ) : null}
      </div>
      <div className="blog-details">
        <label>Blog author: </label>
        <select
          name="author"
          placeholder="author"
          value={values.author}
          onChange={handleChange}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
      </div>

      <div className="blog-details">
        <label htmlFor="date">Date :</label>
        <input
          type="date"
          name="date"
          placeholder="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.date && touched.date ? (
          <p className="form-errors">{errors.date}</p>
        ) : null}
      </div>
      <div className="blog-details">
        <label>Status:</label>
        <select
          name="status"
          value={values.status}
          placeholder="status"
          onChange={handleChange}
        >
          <option value="completed">completed</option>
          <option value="pending">pending</option>
        </select>

        {errors.status && touched.status ? (
          <p className="form-errors">{errors.status}</p>
        ) : null}
        <button className="input-button" type="submit">
          Add blog
        </button>
      </div>
    </form>
  );
};

export default CreateBlogForm;
