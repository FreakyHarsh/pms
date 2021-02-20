import { AuthActionTypes } from '../reducers/AuthReducer/auth.actionTypes';

export const setAuthTokens = (response: any) => {
  return (dispatch: any) => {
    dispatch({ type: AuthActionTypes.SET_TOKEN, payload: response.accessToken });
    dispatch({ type: AuthActionTypes.SET_REFRESH_TOKEN, payload: response.refreshToken });
    dispatch({ type: AuthActionTypes.SET_ROLE, payload: response.role });
  }
}

export const setIsLogin = async (isLogin: boolean) => {
  return (dispatch: any) => {
    dispatch({ type: AuthActionTypes.SET_ISLOGIN, payload: isLogin });
  }
}


export const onRegister = (formData: FormData) => {
  return async (dispatch: any) => {
    const response = await fetch(baseURL + '/students/register', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data)
        return JSON.parse(data);
      })
      .catch((error) => console.log(error));
    console.log(response);
    if (response.status === 400) {
      return dispatch({ type: AuthActionTypes.SET_ERROR, payload: response })
    }
    return dispatch(setAuthTokens(response))
  }
}