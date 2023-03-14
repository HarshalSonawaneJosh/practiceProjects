import { render, screen } from "@testing-library/react";
import NotFound from "./notFound";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
const MockCreate = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
describe("NotFound", () => {
  it("notFound component test", () => {
    render(<MockCreate />);
    const hedingElement = screen.getByRole("heading");
    expect(hedingElement).toBeInTheDocument();
  });

  it("notFound component test", () => {
    render(<MockCreate />);
    const headingText = screen.getByText("Sorry");
    expect(headingText).toBeInTheDocument();
  });

  it("notFound component test", () => {
    render(<MockCreate />);
    const hedingElement = screen.getByRole("link");
    expect(hedingElement).toBeInTheDocument();
  });
});
