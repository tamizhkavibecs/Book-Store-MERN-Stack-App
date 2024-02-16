import { render, screen } from "@testing-library/react";
import DeleteBook from "./App";

test("renders learn react link", () => {
  render(<DeleteBook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
