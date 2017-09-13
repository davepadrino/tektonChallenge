const initialState = {
  selected: "5"
};


export default function(state = initialState, action) {
  switch (action.type) {
    case 'NUMBER_SELECTION':
      return {
      ...state,
      selected: action.payload
      };

  default: {
    return state;
  }
}

  return state;
}
