import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import BlogDetails from "./BlogDetails";

const queryClient = new QueryClient();
const MockCreate = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BlogDetails />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("BlogDetails", () => {
  it("Blog Details test case", () => {
    render(<MockCreate />);

    const headingText = screen.getByText(/Loading.../i);
    expect(headingText).toBeInTheDocument();
  });

  //Rmg
  it("Blog Details test case", () => {
    render(<MockCreate />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
