import { AuthActionTypes } from "./auth.actionTypes";

export interface AuthState {
  token: string;
  refreshToken: string;
  isLogin: boolean;
  role: number | null;
  error: { message: string; status: number | null; key: string };
}


const initialState: AuthState = {
  token: '',
  refreshToken: '',
  isLogin: false,
  role: null,
  error: { message: '', status: null, key: '' }
}

export const AuthReducer = (state = initialState, action: { type: AuthActionTypes; payload?: any }) => {
  switch (action.type) {
    case AuthActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    case AuthActionTypes.SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload
      }

    case AuthActionTypes.SET_ISLOGIN:
      return {
        ...state,
        isLogin: action.payload
      }

    case AuthActionTypes.SET_ROLE:
      return {
        ...state,
        role: action.payload
      }

    case AuthActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}