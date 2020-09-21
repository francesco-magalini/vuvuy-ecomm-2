import { Language } from "../../types/i18nReduxTypes";
import {
  GET_LANG,
  LanguageActions,
  SET_LANG,
} from "../actions/i18nReduxActions";

interface LanguageState {
  language: Language;
}

const initialState = {
  language: { id: "en" },
};

export default function i18nReducer(
  state = initialState,
  action: LanguageActions
): LanguageState {
  switch (action.type) {
    
    case SET_LANG:
      return { ...state, language: action.language };

    case GET_LANG:
      return { ...state, language: action.language };

    default:
      return state;
  }
}
