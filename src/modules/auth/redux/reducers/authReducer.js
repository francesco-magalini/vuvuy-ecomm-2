import {
  AUTH_USER,
  AUTH_MFA,
  AUTH_NEW_PASSWORD_REQUIRED,
  UNAUTH_USER,
  REGISTER_USER,
  REGISTER_USER_CONFIRM,
  REGISTER_MFA,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_CONFIRM,
  AUTH_ERROR,
  AUTH_ERROR_CLEAR,
  COMPLETE_REGISTRATION,
} from "../types/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

/* export default function(state = {}, action) { */
const initialAuthState = {
  user: 'francesco',
  authToken: undefined,
};

export default persistReducer(
  { storage, key: "auth" /* , whitelist: ["user", "authToken"] */ },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case AUTH_USER: {
        var result = {
          ...state,
          error: "",
          authenticated: true,
          mfa: false,
          cognitoUser: action.payload.cognitoUser,
        };

        if (action.payload.user) {
          result.user = {
            ...action.payload.user,
            tenantUser: {
              ...action.payload.user.tenantUser,
              items: action.payload.user.tenantUser.items.map(item => {
                return {
                  ...item, 
                  tenant: {
                    ...item.tenant,
                    extensions: JSON.parse(item.tenant.extensions),
                  },
                };
              }),
            },
            userRetailStore: {
              ...action.payload.user.userRetailStore,
              items: action.payload.user.userRetailStore.items.map(item => {
                return {
                  ...item, 
                  retailStore: {
                    ...item.retailStore,
                    extensions: JSON.parse(item.retailStore.extensions),
                  },
                };
              }),
            },
          };
        }

        const returnProps = result;
        return returnProps;
      }
      case AUTH_MFA: {
        const returnProps = {
          ...state,
          error: "",
          authenticated: false,
          mfa: true,
          changePassword: false,
          cognitoUser: action.payload,
        };

        return returnProps;
      }
      case AUTH_NEW_PASSWORD_REQUIRED: {
        const returnProps = {
          ...state,
          error: "",
          authenticated: false,
          mfa: false,
          changePassword: true,
          cognitoUser: action.payload,
        };

        return returnProps;
      }
      case UNAUTH_USER: {
        const returnProps = {
          ...state,
          error: "",
          authenticated: false,
          user: null,
          cognitoUser: null,
        };

        return returnProps;
      }
      case REGISTER_USER: {
        const returnProps = {
          ...state,
          error: "",
          authenticated: false,
          register: true,
        };

        return returnProps;
      }
      case REGISTER_USER_CONFIRM: {
        const returnProps = {
          ...state,
          error: "",
          authenticated: false,
          register: true,
          mfa: false,
          resendCode: false,
        };

        return returnProps;
      }
      case REGISTER_MFA: {
        const returnProps = {
          ...state,
          error: "",
          mfa: true,
          resendCode: false,
          cognitoUser: action.payload,
        };

        return returnProps;
      }
      case REGISTER_USER_ERROR: {
        const returnProps = {
          ...state,
          error: action.payload,
          mfa: true,
          resendCode: true,
          cognitoUser: action.cognitoUser,
        };

        return returnProps;
      }
      case AUTH_ERROR: {
        const returnProps = {
          ...state,
          error: action.payload,
          authenticated: false,
        };

        return returnProps;
      }
      case FORGOT_PASSWORD: {
        const returnProps = {
          ...state,
          error: "",
          forgotPasswordCode: true,
          authenticated: false,
        };

        return returnProps;
      }
      case FORGOT_PASSWORD_CONFIRM: {
        const returnProps = {
          ...state,
          error: "",
          forgotPasswordCode: false,
          authenticated: false,
        };

        return returnProps;
      }
      case AUTH_ERROR_CLEAR: {
        const returnProps = { ...state, error: "", authenticated: false };

        return returnProps;
      }

      default:
        return state;
    }
  }
);
