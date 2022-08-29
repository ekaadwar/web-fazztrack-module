const initialState = {
  data: [],
  details: {},
};

const modules = (state = initialState, action) => {
  switch (action.type) {
    case "MODULES_GET": {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};

export default modules;
