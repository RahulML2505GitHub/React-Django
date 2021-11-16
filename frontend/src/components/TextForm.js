import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handelOnChange = (event) => {
    setText(event.target.value);
  }
  const handelOnUpClick = () => {
    setText(text.toUpperCase());
  }
  const handelOnLowClick = () => {
    setText(text.toLowerCase());
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const clearBox = () => {
    setText('');
  }
  const copyText = () => {
    if (text.length) {
      navigator.clipboard.writeText(text);
      props.alerFunction("Copied to clipboard", 'success');
    } else {
      props.alerFunction("Enter text to copy", 'warning');
    }
  }

  return (
    <>
      <div className="container">
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" id="TextArea" style={props.currentTheme.textAreaTheme} value={text} onChange={handelOnChange} placeholder={props.placeholder} rows="8"></textarea>
        </div>

        <div> {/* Buttons */}
          <button type="button" disabled={text.length===0} className={`btn btn-${props.currentTheme.button} mx-1 my-1`} onClick={handelOnUpClick}>Change to UpperCase</button>
          <button type="button" disabled={text.length===0} className={`btn btn-${props.currentTheme.button} mx-1 my-1`} onClick={handelOnLowClick}>Change to LowerCase</button>
          <button type="button" disabled={text.length===0} className={`btn btn-${props.currentTheme.button} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button type="button" disabled={text.length===0} className={`btn btn-${props.currentTheme.button} mx-1 my-1`} onClick={clearBox}>Clear box</button>
          <button type="button" className={`btn btn-${props.currentTheme.button} mx-1 my-1`} onClick={copyText}>Copy</button>
        </div>
      </div>

      <div className="container my-3">
        <h2> Your text summery </h2>
        <p> {(text.length) ? ( text.trim().split(/[ ]+/).join(" ").split(/\s+/).length) : (0)} words, {text.length} charecter</p>
        <p> {(text.length) ? (0.008 * text.trim().split(' ').length) : (0)} minutes to read</p>
      </div>

      <div className="container my-3">
        <h2> Preview </h2>
        <p> {(text.length) ? (text) : ('Nothong to preview!')} </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  placeholder: 'Enter text here'
}
