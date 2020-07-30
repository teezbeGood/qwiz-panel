import {ERROR_SHOW, ERROR_HIDE, SUCCESS, LOGOUT} from "../types";


const handlers = {
  [SUCCESS]: (state, {payload}) => ({...payload, isAuth: true, isError: false}),
  [LOGOUT]: (state) => ({...state, isAuth: false, isError: false}),
  [ERROR_SHOW]: (state, {payload}) => ({...payload, isError: true}),
  [ERROR_HIDE]: (state) => ({...state, isError: false}),
  DEFAULT: state => state
}

export const authReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}