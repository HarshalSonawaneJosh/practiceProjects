import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

export const BlogList = ({
  data,
  title,
  sort,
  setSort,
  sortDirection,
  setSortDirection,
  status,
  setStatus,
  search,
  setSearch,
  triggerHandler,
  searchTitle,
}) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <br />
      <label>Search title : </label>
      <input
        type="text"
        value={search}
        placeholder="Search todos..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => triggerHandler(searchTitle)}>Search</button>
      <br />
      <label>Sort : </label>
      <select
        defaultValue={sortDirection}
        onChange={(e) => setSortDirection(e.target.value)}
      >
        <option value={"ASC"}>A-Z</option>
        <option value={"DESC"}>Z-A</option>
      </select>
      <br />

      <label>Sort By Key : </label>
      <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
        <option value={"id"}>Id</option>
        <option value={"title"}>Title</option>
        <option value={"date"}>Date</option>
      </select>

      <br />
      <label>Status:</label>
      <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
        <option value={undefined}>All</option>
        <option value={"completed"}>completed</option>
        <option value={"pending"}>pending</option>
      </select>

      {data?.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
