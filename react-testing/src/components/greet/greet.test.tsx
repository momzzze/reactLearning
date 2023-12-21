import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });

/**
 * Greet should render the text hello and if a name is passed into the component, it should render hello <name>. *
 */

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });  
});
describe("Nested", () => {
    test("Greet renders with a name", () => {
      render(<Greet name="John" />);
      const textElement = screen.getByText(/hello john/i);
      expect(textElement).toBeInTheDocument();
    });
  });