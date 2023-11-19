import {EDIT_PROGRESS, BAY_COURSE, EDIT_EMAIL, EDIT_PASSWORD, SIGN_OUT, SIGN_IN, REGISTRATION} from '../actions/types'



  



const initialState = {
    dataUser: null,
}

export default function apiReducer(state = initialState, action) {
    switch (action.type) {

        case REGISTRATION: {
            const { data } = action.payload
 
            return {
                ...state,
                dataUser: data,
            }
        }

        case SIGN_IN: {
            const { data } = action.payload
 
            return {
                ...state,
                dataUser: data,
            }
        }

        case SIGN_OUT: {
            return {
                ...state,
                dataUser: [],
            }
        }

        case BAY_COURSE: {
            const { data } = action.payload
      
            return {
              ...state,
              dataUser: {
                ...state.dataUser,
                courses: {
                  ...state.dataUser.courses,
                  [data]: {
                    ...state.dataUser.courses[data],
                    statusBay: true
                  }
                }
              }
            }
        }

        default:
            return state
    }
}