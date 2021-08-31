import React from 'react'
import '../css/FavoriteSearchForm.css'

export default function FavoriteSearchForm(props) {
    if (props.searchType === "name") {
        return (
            <div className="favorite-form">
                <label htmlFor="filter-favorites"></label>
                <input id="filter-favorites-by-name" type="text" name="name" onChange={props.handleChange} placeholder="Filter Favorites by Foood Name..."/>
                <button onClick={() => props.handleSearchType("name")}>↹</button> 
            </div>
            )
        }
    else {
        return (
            <div className="favorite-form">
                <label htmlFor="filter-favorites"></label>
                <input id="filter-favorites-by-category" type="text" name="category" onChange={props.handleChange} placeholder="Filter Favorites by Food Category..."/>
                <button onClick={()=> props.handleSearchType("category")}>↹</button>
            </div>
        )

    }
}
