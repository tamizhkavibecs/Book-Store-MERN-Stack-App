import { render, screen } from "@testing-library/react";
import EditBook from "./App";

test("renders learn react link", () => {
  render(<EditBook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
