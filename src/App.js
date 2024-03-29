import React, { useState } from "react";
import "./App.css";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

function App() {
  const [comments, setComments] = useState([]);

  // const comments = [
  //   // {
  //   //   id: 1,
  //   //   text: "nice pic",
  //   // },
  //   // {
  //   //   id: 2,
  //   //   text: "test comment",
  //   // },
  // ];

  return (
    <div className="App">
      <CommentForm setComments={setComments} />
      <CommentList allComments={comments} />
    </div>
  );
}

export default App;
