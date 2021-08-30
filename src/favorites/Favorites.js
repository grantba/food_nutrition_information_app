import React, { Component } from 'react'
import FavoriteSearchForm from './FavoriteSearchForm'
import Favorite from './Favorite'
import {connect} from 'react-redux'
import {getFavorites, addFavorite} from '../actions/favorites'

class Favorites extends Component {

    componentDidMount() {
        this.props.getFavorites(1)
    }

    render() {
        debugger
        return (
            <div>
                <Favorite/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        message: state.message,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps, {getFavorites, addFavorite})(Favorites)
