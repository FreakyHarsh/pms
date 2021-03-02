import { AuthActionTypes } from '../reducers/AuthReducer/auth.actionTypes';
import { StudentActionTypes } from '../reducers/StudentReducer/student.actionTypes';


export const authStart = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const roll = localStorage.getItem('role');
    if (token && refreshToken && roll) {
      dispatch({ type: AuthActionTypes.SET_TOKEN, payload: token });
      dispatch({ type: AuthActionTypes.SET_REFRESH_TOKEN, payload: refreshToken });
      dispatch({ type: AuthActionTypes.SET_ROLE, payload: roll });
      dispatch({ type: AuthActionTypes.SET_ISLOGIN, payload: true });
    }
    else {
      if (refreshToken) {
        getNewTokens('students', refreshToken);
      }
    }
  }
}

export const setAuthTokens = (response: any) => {
  localStorage.setItem('accessToken', response.accessToken);
  localStorage.setItem('refreshToken', response.refreshToken);
  localStorage.setItem('role', response.roll)
  return (dispatch: any) => {
    dispatch({ type: AuthActionTypes.SET_TOKEN, payload: response.accessToken });
    dispatch({ type: AuthActionTypes.SET_REFRESH_TOKEN, payload: response.refreshToken });
    dispatch({ type: AuthActionTypes.SET_ROLE, payload: response.roll });
    dispatch({ type: AuthActionTypes.SET_ISLOGIN, payload: true });
  }
}

export const getNewTokens = (refreshFor: string, refreshToken: string) => {
  // get response from student/refresh and run setAuthToken
  return async (dispatch: any, getState: any) => {
    console.log(getState().authState)
    const response = await fetch(baseURL + '/' + refreshFor + '/refresh', {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    }).then(res => res.json())
      .then(data => data)
      .catch(error => console.log(error));
    console.log(response);
    return dispatch(setAuthTokens(response))
  }
}

export const onRegister = (formData: FormData, registerFor: string) => {
  return async (dispatch: any) => {
    const response = await fetch(baseURL + '/' + registerFor + '/register', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        return JSON.parse(data);
      })
      .catch((error) => console.log(error));
    console.log(response);
    if (response?.status === 400) {
      return dispatch({ type: AuthActionTypes.SET_ERROR, payload: response })
    }
    return dispatch(setAuthTokens(response))
  }
}

export const onLogin = (response: any) => {
  return (dispatch: any) => {
    return dispatch(setAuthTokens(response));
  }
}

export const onLogout = () => {
  return (dispatch: any) => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    const role = localStorage.getItem('role');
    switch (role) {
      case '1':
        dispatch({ type: StudentActionTypes.RESET_STUDENT });
        break;
    }
    localStorage.removeItem('role');
    dispatch({ type: AuthActionTypes.SET_TOKEN, payload: '' });
    dispatch({ type: AuthActionTypes.SET_REFRESH_TOKEN, payload: '' });
    dispatch({ type: AuthActionTypes.SET_ROLE, payload: null });
    dispatch({ type: AuthActionTypes.SET_ISLOGIN, payload: false });
  }
}