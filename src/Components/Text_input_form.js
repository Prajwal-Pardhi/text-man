import React, { useState } from "react";

export default function Text_input_form() {
  const funUppercase = () => {
    console.log("clicked Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelOnChange = (event) => {
    // console.log("changed!!");
    // console.log(event.target.value);
    setText(event.target.value);
  };

  const [text, setText] = useState("enter here");

  return (
    <>
      <div>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter your text to analyse:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          cols="10"
          value={text}
          onChange={handelOnChange}
        ></textarea>
        <button className="btn btn-primary" onClick={funUppercase}>
          Convert to Uppercase
        </button>
      </div>
      <div className="container my-5">
        <h3></h3>
      </div>
    </>
  );
}
