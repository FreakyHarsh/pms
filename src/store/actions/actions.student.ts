import { StudentActionTypes } from "../reducers/StudentReducer/student.actionTypes"

export const setStudent = (token: string) => {
  return async (dispatch: any) => {
    const student = await fetch(baseURL + '/students/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));

    return dispatch({ type: StudentActionTypes.SET_STUDENT, payload: student });
  }
}
