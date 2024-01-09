import React, { useState } from "react";

export default function Text_input_form() {
  const [text, setText] = useState("");
  const [prevText, setPrevText] = useState(text);

  const funCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert("Text is copied to clipboard.");
  };

  const funClearText = () => {
    setText("");
  };
  const funUppercase = () => {
    setPrevText(text);
    console.log("clicked Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const funLowercase = () => {
    setPrevText(text);
    console.log("clicked Lowercase");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const funRemoveExtraSpaces = () => {
    setPrevText(text);
    setText(text.replace(/\s+/g, " ").trim());
  };

  const funAutoCorrect = () => {
    setPrevText(text);
    // Trim leading and trailing spaces
    const sentences = text.split(/(?<=[.!?])\s+/);
    const formattedSentences = sentences.map((sentence) => {
      // Trim leading and trailing spaces
      sentence = sentence.trim();

      // Capitalize the first letter
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

      // Add a period at the end if it's missing
      if (!/[.?!]$/.test(sentence)) {
        sentence += ".";
      }

      return sentence;
    });

    // Join the sentences back into a formatted paragraph
    const formattedParagraph = formattedSentences.join(" ");
    setText(formattedParagraph);
  };

  const handelOnChange = (event) => {
    // console.log("changed!!");
    // console.log(event.target.value);
    setText(event.target.value);
  };

  const funUndo = () => {
    setText(prevText);
  };

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
        <button className="btn btn-primary m-2" onClick={funCopyToClipboard}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary m-2" onClick={funClearText}>
          Clear text
        </button>
        <button className="btn btn-primary m-2" onClick={funUndo}>
          Undo
        </button>
        <button className="btn btn-primary m-2" onClick={funUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={funLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={funAutoCorrect}>
          Auto Format Text
        </button>
        <button className="btn btn-primary m-2" onClick={funRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="preview-text my-5">
        <h4>Your text summary:</h4>
        <p>
          Words: {text.split(" ").length} and Characters: {text.length}{" "}
        </p>
        <p>Estimate time to read: {0.008 * text.split(" ").length} min</p>
        <h4>Preview:</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
