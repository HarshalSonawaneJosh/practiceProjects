import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { deleteById } from "./services/todoServices";
import { useHistory } from "react-router-dom";
const Delete = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery("detail-key", () => {
    return deleteById(id);
  });
  const history = useHistory();
  history.push("/");
  return <div className="delete"></div>;
};

export default Delete;
