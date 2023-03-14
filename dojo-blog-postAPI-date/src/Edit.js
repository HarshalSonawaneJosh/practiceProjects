import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import useFetch from "./useFetch";

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState(""); //new
  const [author, setAuthor] = useState("mario");
  const [status, setStatus] = useState();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleEdit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, date, status };
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      history.push("/");
    });
  };

  // useEffect used for storing the blog data in edit scenario
  useEffect(() => {
    if (blog !== null) {
      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(body.author);
      setDate(blog.date);
      setStatus(blog.status);
    }
  }, [blog]);

  return (
    <>
      {!isPending ? (
        <div className="create">
          <h2>Add a New Blog</h2>
          <form onSubmit={handleEdit}>
            <label>Blog title:</label>
            <input
              type="text"
              value={title}
              placeholder="name"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label>Blog body:</label>
            <textarea
              required
              value={body}
              placeholder="body"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog date:</label> {/* New */}
            <input
              type="date"
              value={date}
              placeholder="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label>Blog author:</label>
            <select
              value={author}
              placeholder="author"
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="mario">mario</option>
              <option value="yoshi">yoshi</option>
            </select>
            <label>Status:</label>
            <select
              value={status}
              placeholder="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="completed">completed</option>
              <option value="pending">pending</option>
            </select>
            {!isPending && <button>Update Blog</button>}
            {isPending && <button disabled>Updating blog...</button>}
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Edit;
