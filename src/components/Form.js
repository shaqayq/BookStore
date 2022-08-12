import React from 'react';
import '../style/form.css';

const Form = () => (
  <>
    <form>
      <label htmlFor="title">Title: </label>
      <input type="text" placeholder="Enter book title" id="title" />

      <label htmlFor="authore">Authore</label>
      <input type="text" placeholder="Enter book author name" id="authore" />

      <button type="button">Add Book</button>
    </form>
  </>
);

export default Form;
