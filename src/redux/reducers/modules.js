const initialState = {
  modules: [],
  details: {},
};

const modules = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MODULES": {
      console.log(action.payload);
      return {
        ...state,
        modules: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modules;
