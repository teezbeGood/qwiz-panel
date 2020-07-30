import React, {useReducer} from "react"
import {AuthContext} from "./authContext";
import {authReducer} from "./authReducer";
import {ERROR_HIDE, ERROR_SHOW, LOGOUT, SUCCESS} from "../types";

export const AuthState = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {isAuth: !!localStorage.getItem('token'), isError: false})

  const authSuccess = (token, message) =>
    dispatch({
      type: SUCCESS,
      payload: {token, message}
    })

  const logout = () => {
    dispatch({
      type: LOGOUT
    })
    localStorage.clear()
  }

  const authError = message => {
    dispatch({
      type: ERROR_SHOW,
      payload: {message}
    })
    setTimeout(() => dispatch({
      type: ERROR_HIDE,
    }), 2000)
  }

  return(
    <AuthContext.Provider value={{
      authSuccess,
      authError,
      logout,
      auth: state
    }}>
      {children}
    </AuthContext.Provider>
  )
}