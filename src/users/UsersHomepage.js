import React from 'react'

export default function UsersHomepage(props) {
    return (
        <div>
            {props.message !== "" && props.message !== undefined ? <h2 className="error">{props.message} Please</h2> : <h1 className="error">Welcome, {props.user}</h1>}
        </div>
    )
}
