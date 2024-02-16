import { render, screen } from "@testing-library/react";
import ShowBook from "./App";

test("renders learn react link", () => {
  render(<ShowBook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
