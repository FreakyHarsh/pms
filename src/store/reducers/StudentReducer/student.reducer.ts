import { StudentActionTypes } from './student.actionTypes';

export interface StudentState {
  id: string
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
  sem1?: number;
  sem2?: number;
  sem3?: number;
  sem4?: number;
  sem5?: number;
  sem6?: number;
  sem7?: number;
  sem8?: number;
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