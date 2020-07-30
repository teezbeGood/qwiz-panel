import React, {useContext, useEffect, useState} from "react"
import {useHttp} from "../hooks/http.hook";
import {CommandsContext} from "../context/commands/commandsContext";

export const Rights = () => {
  const {commands, setCommands} = useContext(CommandsContext)
  const [rights, setRights] = useState([])
  const {request} = useHttp()

  useEffect(() => {

    if (!Object.keys(commands).length)
      setCommands()

    request('https://dorogi-pobedi-panel.firebaseio.com/rights.json')
      .then(data => {
          setRights(data)
        }
      )
    // eslint-disable-next-line
  }, [])


  return (
    rights.length ?
      <>

        {rights.map((tour, index) => (
          index !== 0 ?
            <div key={'tour' + index}>
              <h1 className='text-center'>Ответы на {index} тур</h1>
              {tour.map((quest, i) =>
                i !== 7 ?
                  <div className="form-group row" key={'quest' + index + '-' + i}>
                    <label className='col-2 col-form-label text-right' htmlFor={'quest' + index + '-' + i}>Вопрос
                      №{i + 1}:</label>
                    <div className='col-9'>
                      <input id={'quest' + index + '-' + i} className='form-control' type="text"
                             defaultValue={quest.join(', ')}/>
                    </div>
                  </div>
                  : null
              )}
            </div>
            :
            null
        ))}

      </>
      :
      <div className="position-absolute spinner-border" style={{top: '40%', left: '50%'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
  )
}