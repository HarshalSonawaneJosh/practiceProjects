import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
const MockCreate = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("Navbar", () => {
  //Checking heading element.
  it("navbar test case", () => {
    render(<MockCreate />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  // Checking heading text.
  it("navbar test case", () => {
    render(<MockCreate />);

    const headingText = screen.getByText(/The Dojo Blog/i);
    expect(headingText).toBeInTheDocument();
  });

  it("navbar test case by clicking link navigates to correct location", () => {
    render(<MockCreate />);

    const link2 = screen.getByText(/Home/i);
    fireEvent.click(link2);
    expect(window.location.pathname).toBe("/");
  });

  //Checking link navigates proper or not.
  it("navbar test case by clicking link navigates to correct location", () => {
    render(<MockCreate />);

    const link1 = screen.getByText(/New Blog/i);
    fireEvent.click(link1);
    expect(window.location.pathname).toBe("/create");
  });
});
