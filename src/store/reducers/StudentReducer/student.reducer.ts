import { StudentActionTypes } from './student.actionTypes';

interface StudentState {
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
    case StudentActionTypes.setStudent:
      return {
        ...state,
        ...action.payload
      }
  }
  return state;
}