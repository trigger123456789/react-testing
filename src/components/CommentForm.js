import React, { useState } from "react";
import "./CommentForm.css"

const CommentForm = ({ setComments }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const addComments = () => {
    setComments((prevState) => [...prevState, { id: Date.now(), text: text }]);
    setChecked(!checked);
    setText('');
  };
  return (
    <div className="comment-form-container">
      <h2>comment form</h2>
      <div>  
      <input
        placeholder="write your comment here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        </div>
      <input
        type="checkbox"
        id="checkbox"
        // defaultChecked={checked}
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">I agree to terms and condition</label>
      <div>


      <button disabled={!checked || !text} onClick={addComments}>
        submit comment
        </button>
      </div>
        
    </div>
  );
};

export default CommentForm;
