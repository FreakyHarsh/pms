import { AuthActionTypes } from '../reducers/AuthReducer/auth.actionTypes';

export const setAuthTokens = (response: any) => {
  return (dispatch: any) => {
    dispatch({ type: AuthActionTypes.setToken, payload: response.accessToken });
    dispatch({ type: AuthActionTypes.setRefreshToken, payload: response.refreshToken });
  }
}
