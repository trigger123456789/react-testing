import { fireEvent, render, screen } from "@testing-library/react";
import CommentForm from "../components/CommentForm";
import userEvent from "@testing-library/user-event";

test("Initial Conditions", () => {
  render(<CommentForm />);

  const commentInput = screen.getByRole("textbox");
  expect(commentInput).toBeInTheDocument();

  const checkbox = screen.getByLabelText("I agree to terms and condition", {
    exact: false,
  });
  expect(checkbox).toBeInTheDocument();

  const submitButton = screen.getByRole("button", {
    name: "submit comment",
    exact: false,
  });

  expect(submitButton).toBeDisabled();
});

test("Enable submit button on type and checkbox click", () => {
  render(<CommentForm />);

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


  userEvent.type(commentInput, "something");

  //   fireEvent.click(checkbox);
  userEvent.click(checkbox);
  expect(submitButton).toBeEnabled();
  userEvent.click(checkbox);
  expect(submitButton).toBeDisabled();
});
