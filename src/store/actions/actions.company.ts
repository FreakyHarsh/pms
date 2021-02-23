import { CompanyActionTypes } from '../reducers/CompanyReducer/company.actionTypes';

export const setCompany = (token: string) => {
  return async (dispatch: any) => {
    const company = await fetch(baseURL + '/company/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));

    return dispatch({ type: CompanyActionTypes.SET_COMPANY, payload: company });
  }
}