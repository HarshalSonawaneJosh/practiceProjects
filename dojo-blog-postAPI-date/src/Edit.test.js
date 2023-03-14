import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Create from "./Create";

const queryClient = new QueryClient();

const MockCreate = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Create />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("Create", () => {
  it("should render heading", () => {
    render(<MockCreate />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toBeInTheDocument();
  });

  it("should render heading", async () => {
    render(<MockCreate />);

    const headingElement = await screen.findByRole("heading");

    expect(headingElement).toBeInTheDocument();
  });

  it("Able to type in Input Element", async () => {
    render(<MockCreate />);
    const nameElement = await screen.findByPlaceholderText(/name/i);
    const bodyElement = await screen.findByPlaceholderText(/body/i);
    const authorElement = await screen.findByPlaceholderText(/author/i);
    const statusElement = await screen.findByPlaceholderText(/status/i);

    await fireEvent.click(nameElement);
    await fireEvent.click(bodyElement);
    await fireEvent.click(authorElement);
    await fireEvent.click(statusElement);

    await fireEvent.change(nameElement, { target: { value: "Harshal" } });
    await fireEvent.change(bodyElement, { target: { value: "Sonawane" } });
    await fireEvent.change(authorElement, { target: { value: "mario" } });
    await fireEvent.change(statusElement, { target: { value: "completed" } });

    await expect(nameElement.value).toBe("Harshal");
    await expect(bodyElement.value).toBe("Sonawane");
    await expect(authorElement.value).toBe("mario");
    await expect(statusElement.value).toBe("completed");
  });
});
