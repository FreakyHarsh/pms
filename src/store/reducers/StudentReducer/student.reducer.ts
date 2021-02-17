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
}

export const StudentReducer = (state = initialState, action: { type: StudentActionTypes; payload?: any }): StudentState => {
  switch (action.type) {
    case StudentActionTypes.setFirstName:
      return {
        ...state,
        firstName: action.payload
      }

    case StudentActionTypes.setLastName:
      return {
        ...state,
        lastName: action.payload
      }

    case StudentActionTypes.setCurrentAddress:
      return {
        ...state,
        currentAddress: action.payload
      }

    case StudentActionTypes.setHomeAddress:
      return {
        ...state,
        homeAddress: action.payload
      }

    case StudentActionTypes.setDepartment:
      return {
        ...state,
        department: action.payload
      }

    case StudentActionTypes.setEmail:
      return {
        ...state,
        email: action.payload
      }

    case StudentActionTypes.setUinNumber:
      return {
        ...state,
        uinNumber: action.payload
      }

    case StudentActionTypes.setGender:
      return {
        ...state,
        gender: action.payload
      }

    case StudentActionTypes.setPhoneNumber:
      return {
        ...state,
        phoneNumber: action.payload
      }

    case StudentActionTypes.setPassword:
      return {
        ...state,
        password: action.payload
      }
  }
  return state;
}