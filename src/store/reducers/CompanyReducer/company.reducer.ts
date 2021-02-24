import { CompanyActionTypes } from './company.actionTypes';
export interface CompanyState {
  id: string;
  name: string;
  email: string;
  registrationNumber: string;
  gstNumber: string;
  webSiteURL: string;
  address: string;
  phoneNumber: string;
  password: string;
  avatar: string;
}

const initialState: CompanyState = {
  id: '',
  name: '',
  email: '',
  registrationNumber: '',
  gstNumber: '',
  webSiteURL: '',
  address: '',
  phoneNumber: '',
  password: '',
  avatar: '',
}

export const CompanyReducer = (state = initialState, action: { type: CompanyActionTypes, payload?: any }): CompanyState => {
  switch (action.type) {
    case CompanyActionTypes.SET_COMPANY:
      return {
        ...state,
        ...action.payload
      }
    case CompanyActionTypes.RESET_COMPANY:
      return {
        ...state,
        ...initialState
      }
    default:
      return state;
  }
}