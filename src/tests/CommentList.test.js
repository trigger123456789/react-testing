import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentList from "../components/CommentList";

test("comments are not available", () => {
  render(<CommentList allComments={[]} />);

  const h2Element = screen.getByText("no comments", { exact: false });
  expect(h2Element).toBeInTheDocument();
});

test("List all comments", () => {
  const comments = [
    {
      id: 1,
      text: "Comment 1",
    },
    {
      id: 2,
      text: "Comment 2",
    },
  ];

  render(<CommentList allComments={comments} />);

  const h2Element = screen.queryByText("no comments", { exact: false });
  expect(h2Element).not.toBeInTheDocument();


  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi).toHaveLength(comments.length);
});
