import React, {useContext} from 'react'
import {AuthContext} from "../context/auth/authContext";

export const Auth = () => {

  const {authSuccess, authError} = useContext(AuthContext)

  const APP_KEY = 'AIzaSyDCFNxWwdaCtWk0nLNx8B4tC877m5ns2bE'

  const authHandler = async event => {
    event.preventDefault()
    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APP_KEY}`, {
        method: "POST",
        body: JSON.stringify({
          email: event.target.email.value,
          password: event.target.password.value,
          returnSecureToken: true
        }),
        headers: {'Content-Type': 'application/json'}
      })

      if (response.status === 400) {
        const data = await response.json()
        if (data.error.message === 'EMAIL_NOT_FOUND')
          throw new Error('Пользователь не найден!')
        if (data.error.message === 'INVALID_PASSWORD')
          throw new Error('Неверный пароль!')
      } else {
        const data = await response.json()
        const token = data.idToken
        localStorage.setItem('token', token)
        authSuccess(token, 'Успешная авторизация!')
      }

    } catch (e) {
      authError(e.message)
    }
  }

  return (
    <div className="col-md-6 offset-md-3 pt-5">
      <form onSubmit={authHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" className="form-control" id="password" required minLength="5"/>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-custom-style">Войти</button>
        </div>
      </form>
    </div>
  )
}