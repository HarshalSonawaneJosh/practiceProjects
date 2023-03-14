import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import BlogList from "./BlogList";

const queryClient = new QueryClient();
const MockCreate = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BlogList />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("BlogList", () => {
  //Checking heading element.
  it("BlogList test case", () => {
    render(<MockCreate />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
});
