import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.currentUser,
        renderLoginForm: false,
      };

    case "FAIL_AUTHENTICATE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        renderLoginForm: true,
      };

    case "LOGIN_FORM_VISIBILITY":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload
      }

    default:
      return state;
  }
};

export default rootReducer;