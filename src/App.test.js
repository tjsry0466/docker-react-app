import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/반갑습니다3/i);
  expect(linkElement).toBeInTheDocument();
});
