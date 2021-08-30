import React from 'react'
import '../css/FavoriteSearchForm.css'

export default function FavoriteSearchForm(props) {
    return (
        <div className="favorite-form">
            <label htmlFor="filter-favorites"></label>
            <input type="text" onChange={props.handleChange} placeholder="Filter Favorites..."/>  
        </div>
    )
}
