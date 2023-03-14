import { useQuery } from "react-query";

import { Link, useHistory, useParams } from "react-router-dom";
import { deleteById, getTodoById } from "./services/todoServices";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery("detail-key", () => {
    return getTodoById(id);
  });

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {data && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <div>{data.date}</div>

          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>
          <Link to={`/delete/${id}`}>
            <button>Delete</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
