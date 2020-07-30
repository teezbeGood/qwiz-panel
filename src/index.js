import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import * as ServiceWorker from './serviceWorker'
import {AuthState} from "./context/auth/AuthState";

ReactDOM.render(
   // <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>,
   // </React.StrictMode>,
  document.getElementById('root')
)

ServiceWorker.unregister()
