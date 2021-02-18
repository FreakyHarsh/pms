import { AuthActionTypes } from "./auth.actionTypes";

interface AuthState {
  token: string;
  refreshToken: string;
  user: any;
}

const initialState: AuthState = {
  token: '',
  refreshToken: '',
  user: null
}

export const AuthReducer = (state = initialState, action: { type: AuthActionTypes; payload?: any }) => {
  switch (action.type) {
    case AuthActionTypes.setToken:
      return {
        ...state,
        token: action.payload
      }

    case AuthActionTypes.setRefreshToken:
      return {
        ...state,
        refreshToken: action.payload
      }

    default:
      return state;
  }
}