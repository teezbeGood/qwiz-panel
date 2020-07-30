import React from "react"
import { useHistory } from "react-router-dom"

export const Button = () => {
    const history = useHistory()

    return (
        <div className='pt-3 w-100 d-flex justify-content-center'>
            <button className="btn btn-custom-style" onClick={() => history.push(`/`)}>Назад</button>
        </div>
    )
}