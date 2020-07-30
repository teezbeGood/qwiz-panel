import React, {useContext, useEffect} from "react";
import {CommandsContext} from "../context/commands/commandsContext";
import {ScoreTable} from "../components/ScoreTable/ScoreTable";

export const Main = () => {

  const {commands, setCommands, getAllCommands} = useContext(CommandsContext)

  useEffect(() => {
    if(!Object.keys(commands).length)
      setCommands()
    },
    // eslint-disable-next-line
    [])

  return (
    <>
      {
       !!Object.keys(commands).length ?
          <ScoreTable commands={getAllCommands()}/>
          :
          <div className="position-absolute spinner-border" style={{top: '40%', left: '50%'}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
      }
    </>
  )
}