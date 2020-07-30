import React, {useContext, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {CommandsContext} from "../context/commands/commandsContext";
import {DetailCard} from "../components/Details/DetailCard";

export const Details = () => {
  const commandId = useParams().id

  const {commands, getCommand, setCommands} = useContext(CommandsContext)

  useEffect(() => {
      if (!Object.keys(commands).length)
        setCommands()
    },
    // eslint-disable-next-line
    [])

  const command = !!Object.keys(commands).length ? getCommand(commandId) : null

  return (
    <div style={{padding: '0 20px'}}>
      {
        !Object.keys(commands).length ?
          <div className="position-absolute spinner-border" style={{top: '40%', left: '50%'}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
          :
          <DetailCard
            command={command}
          />
      }
    </div>
  )
}