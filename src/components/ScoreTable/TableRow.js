import React from "react"
import {useHistory} from 'react-router-dom'


export const TableRow = ({command}) => {
  const history = useHistory()

  return (
    <tr onClick={() => history.push(`/${command.id}`)}>
      <th scope="row">{command.title}</th>
      <td>{command.leader.name}</td>
      <td className="text-center" >{command.score ? command.score.length === 7 ? command.score.reduce((sum, next) => sum + next, 0) : 'Команда прошла игру не до конца' : 'Команда не начинала игру'}</td>
    </tr>
  )
}