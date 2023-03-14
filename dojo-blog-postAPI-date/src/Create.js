import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "./services/todoServices";

const Create = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [date, setDate] = useState(""); //new
  const [status, setStatus] = useState("completed");

  const history = useHistory();

  const { mutate: postTodoMutate, isLoading } = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("key");
      history.push("/");
    },
  });

  const handleSubmit = (e) => {
    postTodoMutate({
      title: title,
      body: body,
      author: author,
      date: date,
      status: status,
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
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
        {!isLoading && <button onClick={handleSubmit}>Add Blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
