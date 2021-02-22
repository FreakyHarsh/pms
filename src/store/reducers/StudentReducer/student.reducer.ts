import { StudentActionTypes } from './student.actionTypes';

export interface StudentState {
  id: string;
  firstName: string;
  lastName: string;
  uinNumber: string;
  phoneNumber: string;
  gender: string;
  email: string;
  department: string;
  program: string;
  currentAddress: string;
  homeAddress: string;
  password: string;
  avatar: string;
  resume: string;
}

const initialState: StudentState = {
  id: '',
  firstName: '',
  lastName: '',
  uinNumber: '',
  phoneNumber: '',
  gender: '',
  email: '',
  department: '',
  program: '',
  currentAddress: '',
  homeAddress: '',
  password: '',
  avatar: '',
  resume: '',
}

export const StudentReducer = (state = initialState, action: { type: StudentActionTypes; payload?: any }): StudentState => {
  switch (action.type) {
    case StudentActionTypes.SET_STUDENT:
      return {
        ...state,
        ...action.payload
      }
    case StudentActionTypes.RESET_STUDENT:
      return { ...state, ...initialState, id: '' };
  }
  return state;
}