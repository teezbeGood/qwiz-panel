import React from "react"
import {Button} from "./Button";


export const DetailCard = ({command}) => {

  const {title, leader, phone, members, answers, score} = command

  const numberOfTours = 7
  const arrayHelper = []
  for (let i=0; i<numberOfTours; i++) {
    arrayHelper.push(i)
  }

  const renderTitle = (text) => (
    <h5 className="card-title w-100 text-center">{text}</h5>
  )

  const renderLeader = () => (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Имя: {leader.name}</li>
      <li
        className="list-group-item">Департамент: {leader.dep ? leader.dep : 'не указан'}</li>
      <li className="list-group-item">Телефон для связи: <a href={'tel:' + phone}>{phone}</a>
      </li>
    </ul>
  )

  const renderMembers = () => (
    <ul className="list-group list-group-flush">
      {members.map((member, index) => (
        <li key={index} className="list-group-item">
          <div className='row'>
            <div className='col-lg'>{member.name}</div>
            {member.dep ? <div className='col-lg-6'>Департамент: {member.dep}</div> : null}
          </div>
        </li>
      ))}
    </ul>
  )

  const renderScoreTable = () => (
    <div className="table-responsive">
      <table className="table">
        <thead>
        <tr>
          {arrayHelper.map(i => <th className="text-center" scope="col">{i}-й тур</th>)}
          <th className="text-center" scope="col">Сумма</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          {arrayHelper.map(i => <td
            className="text-center">{score[i] !== undefined ? score[i] : 'не пройден'}</td>)}
          <td className="text-center">{score.reduce((sum, next) => sum + next, 0)}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )

  const renderAnswers = () => (
    <div className="row">
      {answers.map((answ, i) => {
        if (i !== 0) {
          return (
            <div key={i} className="col-md-4 pb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{i}-й тур</h5>
                  <ul className="list-group list-group-flush">
                    {answ.map((item, index) => {
                      if (index !== 7 && typeof item === 'string')
                        return (<li key={index} className="list-group-item">
                          <div className='row'>
                            <div className='col-2'>
                              <strong>{index + 1}</strong>
                            </div>
                            <div className='col-8'>
                              {item ? item : "-"}
                            </div>
                          </div>
                        </li>)
                      else if (index !== 7 && typeof item === 'object')
                        return (
                          <li key={index} className="list-group-item">
                            <div className='row'>
                              <div className='col-1'>
                                <strong>{index + 1}</strong>
                              </div>
                              <div className='col'>
                                {item.answ ? item.answ : "-"}
                              </div>
                              <div className='col-1'>
                                <i className="material-icons">{item.isRight ? 'check' : 'close'}</i>
                              </div>
                              {item.isCheck ?
                                <div className='col-1'>
                                  <i className="material-icons">check</i>
                                </div> : null}
                            </div>
                          </li>
                        )
                      else
                        return null
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )

  return (
    <div className="card mt-5">
      <h3 className="card-header">Карточка команды "{title}"</h3>

      <Button/>
      <hr/>

      <div className="card-body">
        {renderTitle('Лидер команды')}
        {renderLeader()}

        {renderTitle('Участники команды')}
        {renderMembers()}

        {renderTitle('Набранные балы')}
        {score ?
          renderScoreTable()
          :
          <p>Команда не начала игру, либо завершила игру до ввода ответов на 1-й тур</p>
        }

        {renderTitle('Ответы команды')}
        {typeof answers !== 'string' ?
          renderAnswers()
          :
          <p>Команда не проходила игру, либо прошла её до введения функционала по сохранению ответов</p>
        }

        <Button/>
      </div>
    </div>
  )
}


