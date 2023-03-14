import { QueryClient, QueryClientProvider } from "react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const queryClient = new QueryClient();
const MockCreate = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
describe("Home", () => {
  it("Home component test", () => {
    render(<MockCreate />);
    const hedingElement = screen.getByText(/Prev/i);
    expect(hedingElement).toBeInTheDocument();
  });
  it("Home component test", () => {
    render(<MockCreate />);
    const hedingElement = screen.getByText(/Next/i);
    expect(hedingElement).toBeInTheDocument();
  });
  it("button component renders correctly", () => {
    //   const handleClick = jest.fn();
    render(<MockCreate />);
    const buttonElement = screen.getByTestId("prev-button");
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
  });
  it("button component renders correctly", () => {
    //   const handleClick = jest.fn();
    render(<MockCreate />);
    const buttonElement = screen.getByTestId("next-button");
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
  });
});
