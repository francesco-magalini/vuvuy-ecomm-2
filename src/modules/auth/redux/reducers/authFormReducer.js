import { reducer as formReducer } from "redux-form";

const initialState = {
  name: "form",
};

export default formReducer.plugin({
  loginForm: (state, initialState) => {
    return state;
  },
});
