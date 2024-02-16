import { render, screen } from "@testing-library/react";
import CreateBook from "./App";

test("renders learn react link", () => {
  render(<CreateBook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
