import { EDIT_PROGRESS, BAY_COURSE, EDIT_EMAIL, EDIT_PASSWORD, SIGN_OUT, SIGN_IN, REGISTRATION} from '../actions/types'

export const editProgress = () => ({
    type: EDIT_PROGRESS,
})

export const bay = (data) => ({
    type: BAY_COURSE,
    payload: {
        data,
    },
})

export const editEmail= () => ({
    type: EDIT_EMAIL,
})

export const editPassword = (tracks) => ({
    type: EDIT_PASSWORD,

})

export const signOut = () => ({
    type: SIGN_OUT,
})

export const signIn = (data) => ({
    type: SIGN_IN,
    payload: {
        data,
    },
})

export const registration = (data) => ({
    type: REGISTRATION,
    payload: {
        data,
    },
})
