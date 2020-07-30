import {GET_COMMANDS} from "../types";


const handlers = {
  [GET_COMMANDS]: (state, {payload}) => ({...payload}),
  DEFAULT: state => state
}

export const commandsReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}