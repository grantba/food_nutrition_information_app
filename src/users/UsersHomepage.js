import React from 'react'

export default function UsersHomepage(props) {
    return (
        <div>
            <h1 className="error">Welcome, {props.user}</h1>
        </div>
    )
}
