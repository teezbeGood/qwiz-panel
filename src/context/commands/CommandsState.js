import React, {useContext, useReducer} from "react"
import {commandsReducer} from "./commandsReducer";
import {GET_COMMANDS} from "../types";
import {CommandsContext} from "./commandsContext";
import {AuthContext} from "../auth/authContext";

export const CommandsState = ({children}) => {
  const [state, dispatch] = useReducer(commandsReducer, {})

  const {authError} = useContext(AuthContext)

  const setCommands = () => {
    const token = localStorage.getItem('token')
    fetch(`https://dorogi-pobedi-panel.firebaseio.com/game.json?auth=${token}`)
      .then(res => {
        if(res.ok)
          return res.json()
        else
          throw new Error('Что-то пошло не так, авторизуйтесь снова')
      })
      .then(data => {
        dispatch({
          type: GET_COMMANDS,
          payload: data
        })
      })
      .catch(e => {
        authError(e.message)
        localStorage.clear()
      })
  }

  const getAllCommands = () => {
    const commands = state.commands
    if (commands) {
      return Object.keys(commands).map(key => {
        return {
          ...commands[key],
          id: key
        }
      })
    } else {
      return null
    }
  }

  const getCommand = id => {
    const commands = state.commands
    const answers = state.answers
    const phones = state.phones

    if (commands) {
      const command = commands[id]
      const answer = answers[id] ? answers[id] : {answers: 'Ответов нет'}
      const phone = phones[id]
      return {...command, ...phone, ...answer}
    } else {
      return 'Такой команды не существует'
    }
  }

  const getCommandObj = id => {
    const commands = state.commands
    const answers = state.answers
    const phones = state.phones

    if (commands) {
      const command = commands[id]
      const answer = answers[id] ? answers[id] : {answers: 'Ответов нет'}
      const phone = phones[id]
      return {command, phone, answer}
    } else {
      return 'Такой команды не существует'
    }
  }


  return (
    <CommandsContext.Provider value={{
      setCommands,
      getAllCommands,
      getCommand,
      getCommandObj,
      commands: state
    }}>
      {children}
    </CommandsContext.Provider>
  )
}