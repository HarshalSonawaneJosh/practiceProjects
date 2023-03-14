import BlogList from "./BlogList";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { getTodos } from "./services/todoServices";
import { useReducer } from "react";

const BLOG_ACTIONS = {
  SEARCH: "SEARCH",
  SET_PAGE_NUMBER: "SET_PAGE_NUMBER",
  SET_ORDER: "SET_ORDER",
  SET_SORT: "SET_SORT",
  SET_STATUS: "SET_STATUS",
  SET_TRIGGERDATA: "SET_TRIGGERDATA",
};

const initialState = {
  search: "",
  pageNumber: 1,
  sort: "id",
  sortDirection: "ASC",
  status: "All",
  pageLimit: 15,
  triggerData: "",
};

const todoReducer = (state, Action) => {
  switch (Action.type) {
    case BLOG_ACTIONS.SEARCH:
      return {
        ...state,
        search: Action.payload,
      };
    case BLOG_ACTIONS.SET_PAGE_NUMBER:
      return { ...state, pageNumber: Action.payload };

    case BLOG_ACTIONS.SET_ORDER:
      return { ...state, sortDirection: Action.payload };

    case BLOG_ACTIONS.SET_SORT:
      return { ...state, sort: Action.payload };

    case BLOG_ACTIONS.SET_STATUS:
      return { ...state, status: Action.payload };

    case BLOG_ACTIONS.SET_TRIGGERDATA:
      return { ...state, triggerData: Action.payload };

    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const { data, isLoading, error } = useQuery(
    [
      "key",
      state.pageNumber,
      state.sort,
      state.status,
      state.sortDirection,
      state.triggerData,
    ],
    () => {
      if (state.status === "All") {
        setStatus(undefined);
      }
      return getTodos({
        _page: state.pageNumber,
        _limit: state.pageLimit,
        _sort: state.sort,
        _order: state.sortDirection,
        title_like: state.triggerData,
        status: state.status,
      });
    }
  );

  const handlePageChange = (value) => {
    dispatch({ type: BLOG_ACTIONS.SET_PAGE_NUMBER, payload: value });
  };

  const setSearch = (value) => {
    console.log("In setSearch");
    dispatch({ type: BLOG_ACTIONS.SEARCH, payload: value });
  };

  const setSortDirection = (value) => {
    dispatch({ type: BLOG_ACTIONS.SET_ORDER, payload: value });
  };

  const setSort = (value) => {
    dispatch({ type: BLOG_ACTIONS.SET_SORT, payload: value });
  };

  const setStatus = (value) => {
    dispatch({ type: BLOG_ACTIONS.SET_STATUS, payload: value });
  };
  const triggerHandler = (value) => {
    dispatch({ type: BLOG_ACTIONS.SET_TRIGGERDATA, payload: value });
  };

  // console.log("blogs", data);

  return (
    <div className="home">
      {isLoading && (
        <InfinitySpin type="Circles" color="red" height={150} width={150} />
      )}
      {error && <div>{error}</div>}
      {data && (
        <BlogList
          data={data}
          searchTitle={state.search}
          title="All tags!"
          sort={state.sort}
          setSort={setSort}
          sortDirection={state.sortDirection}
          setSortDirection={setSortDirection}
          status={state.status}
          setStatus={setStatus}
          search={state.search}
          setSearch={setSearch}
          triggerHandler={triggerHandler}
        />
      )}
      <button
        data-testid="prev-button"
        onClick={() => handlePageChange(state.pageNumber - 1)}
        disabled={state.pageNumber === 1}
      >
        Prev
      </button>
      <button
        data-testid="next-button"
        onClick={() => handlePageChange(state.pageNumber + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Home;
