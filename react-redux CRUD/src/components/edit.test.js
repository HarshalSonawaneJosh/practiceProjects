import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Edit from "./edit";

const Mock = () => {
  return (
    <BrowserRouter>
      <Edit />
    </BrowserRouter>
  );
};

describe("Create", () => {
  it("should render name", () => {
    render(<Mock />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toBeInTheDocument();
  });
});
