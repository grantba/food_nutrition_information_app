import React from 'react'

export default function UsersHomepage(props) {
    return (
        <div>
            <h1 className="error">Welcome, {props.user}</h1>
            {props.message !== "" && props.message !== undefined ? <h2 className="error">{props.message}</h2> : null}
        </div>
    )
}
