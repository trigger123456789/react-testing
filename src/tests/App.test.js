import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Comments  gets displayed after submitting", async () => {
  render(<App />);

  const checkbox = screen.getByLabelText("I agree to terms and condition", {
    exact: false,
  });

  const submitButton = screen.getByRole("button", {
    name: "submit comment",
    exact: false,
  });

  const commentInput = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });

  userEvent.type(commentInput, "nice pic dear");
  userEvent.click(checkbox);
  userEvent.click(submitButton);

  const commentLi = await screen.findByText("dear", { exact: false });
  expect(commentLi).toBeInTheDocument();
});

test("2 Comments  getst displayed after submitting", () => {
  render(<App />);

  const checkbox = screen.getByLabelText("I agree to terms and condition", {
    exact: false,
  });

  const submitButton = screen.getByRole("button", {
    name: "submit comment",
    exact: false,
  });

  const commentInput = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });

  userEvent.type(commentInput, "nice pic dear");
  userEvent.click(checkbox);
  userEvent.click(submitButton);

  userEvent.type(commentInput, "awesome");

  userEvent.click(submitButton);

  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(1);
});
