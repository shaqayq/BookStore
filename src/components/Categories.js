import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const bookStatus = useSelector((state) => state.Categories);
  const dispatch = useDispatch();

  const statuseHandler = (e) => {
    e.preventDefault();
    dispatch(checkStatus('Under construction'));
  };
  return (
    <>
      <h1>Category Page</h1>
      {bookStatus}
      <button type="button" onClick={statuseHandler}>Check Status</button>
    </>
  );
};

export default Categories;
