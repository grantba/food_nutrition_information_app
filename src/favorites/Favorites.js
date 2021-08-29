import React, { Component } from 'react'
import FavoriteSearchForm from './FavoriteSearchForm'
import Favorite from './Favorite'

class Favorites extends Component {
    render() {
        return (
            <div>
                <FavoriteSearchForm/>
                <Favorite/>
            </div>
        )
    }
}

export default Favorites
