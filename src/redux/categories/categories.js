const CHECK = 'CHECK';

export const checkStatus = (status) => ({
  type: CHECK,
  status,
});

const categoriesReducer = (state = null, action) => {
  switch (action.type) {
    case CHECK:
      return action.status;

    default:
      return state;
  }
};

export default categoriesReducer;
