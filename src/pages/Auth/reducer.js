export const initialState = {
  globalIndex: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INDEX":
      return { ...state, globalIndex: action.payload };
    default:
      return { ...state };
  }
};
