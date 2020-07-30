import React from "react"

export const TableHead = () => {
  return (
    <tr style={{backgroundColor: '#e73728', color: '#fff'}}>
      <th className="text-center" >Название команды</th>
      <th className="text-center" scope="col-3">Имя лидера команды</th>
      <th className="text-center"  scope="col-3">Результат игры</th>
    </tr>
  )
}