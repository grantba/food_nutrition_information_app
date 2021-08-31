import React, { Component } from 'react'
import '../css/index.css';
import FavoriteSearchForm from './FavoriteSearchForm'
import Favorite from './Favorite'
import {connect} from 'react-redux'
import {getFavorites, editFavorite, deleteFavorite, addFavoriteFood} from '../actions/favorites'
import {Switch, Route} from 'react-router-dom'

class Favorites extends Component {

    state = {
        name: ""
    }

    componentDidMount() {
        this.props.getFavorites()
    }

    handleChange = (event) => {
        this.setState({name: event.target.value})
    }

    filterFavorites = () => {
        return this.props.favorites.filter(favorites => {
            return favorites.food.food_name.toLowerCase().includes(this.state.name.toLowerCase())
        })
    }

    editFavorite = favorite => {
        debugger
    }

    deleteFavorite = favorite => {
        debugger
    }

    render() {
        debugger
        return (
            <div>
                <Switch>
                    <Route exact path="/favorites">
                        <FavoriteSearchForm handleChange={this.handleChange}/>
                        <div className="flex">
                        {this.state.name === "" && this.props.favorites.length !== 0 && this.props.favorites.length > 1 ? this.props.favorites.map(favorite => <Favorite key={favorite.id} editFavorite={this.editFavorite} deleteFavorite={this.deleteFavorite} favorite={favorite}/>) :
                            this.state.name !== "" && this.props.favorites.length !== 0 && this.props.favorites.length > 1 ? this.filterFavorites().map(favorite => <Favorite key={favorite.id} editFavorite={this.editFavorite} deleteFavorite={this.deleteFavorite} favorite={favorite}/>) : null}
                        </div>
                    </Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // eventually filter by current user
    // .filter(favorites => {favorites.userId == 1})
    return {
        favorites: state.favorites.favorites,
        message: state.message,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps, {getFavorites, editFavorite, deleteFavorite, addFavoriteFood})(Favorites)
