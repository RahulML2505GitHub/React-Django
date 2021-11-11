import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const handelOnChange = (event)=>{
        setText(event.target.value);
    }
    const handelOnUpClick = ()=>{
        setText(text.toUpperCase());
    }
    const handelOnLowClick = ()=>{
        setText(text.toLowerCase());
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
              <h1> {props.heading} </h1>
              <div className="mb-3">
                <textarea className="form-control" id="TextArea" value={text} onChange={handelOnChange} placeholder={props.placeholder} rows="8"></textarea>
              </div>

              <button type="button" className="btn btn-primary mx-1 my-1" onClick={handelOnUpClick}>Change to UpperCase</button>
              <button type="button" className="btn btn-primary mx-1 my-1" onClick={handelOnLowClick}>Change to LowerCase</button>
            </div>

            <div className="container my-3">
              <h2> Your text summery </h2>
              <p> {text.trim().split(' ').length} words, {text.length} charecter</p>
              <p> {0.008 * text.trim().split(' ').length} minutes to read</p>
            </div>

            <div className="container my-3">
              <h2> Preview </h2>
              <p> {text} </p>
            </div>
        </>
    );
}

TextForm.defaultProps = {
    placeholder: 'Enter text here'
}
