import React, { Component } from 'react'
import '../css/index.css';
import FavoriteSearchForm from './FavoriteSearchForm'
import Favorite from './Favorite'
import {connect} from 'react-redux'
import {getFavorites, editFavoriteFood, deleteFavoriteFood, addFavoriteFood} from '../actions/favorites'

class Favorites extends Component {

    state = {
        name: "",
        category: "",
        searchType: "name"
    }

    componentDidMount() {
        this.props.getFavorites()
    }

    handleSearchType = (type) => {
        type === "name" ? this.setState({name: "", category: "", searchType: "category"}) : this.setState({name: "", category: "", searchType: "name"})
    }

    handleChange = (event) => {
        if (event.target.id === "filter-favorites-by-category") {
            this.setState({name: "", category: event.target.value, searchType: "category"})
        } else {
            this.setState({name: event.target.value, category: "", searchType: "name"})
        }
    }

    filterFavoritesByName = () => {
        return this.props.favorites.filter(favorites => {
            return favorites.food.food_name.toLowerCase().includes(this.state.name.toLowerCase())
        })
    }

    filterFavoritesByCategory = () => {
        return this.props.favorites.filter(favorites => {
            return favorites.food_category_type.toLowerCase().includes(this.state.category.toLowerCase())
        })
    }

    editFavorite = favorite => {
        debugger
    }

    deleteFavorite = favorite => {
        debugger
    }

    render() {
        return (
            <div>
                <FavoriteSearchForm searchType={this.state.searchType} handleSearchType={this.handleSearchType} handleChange={this.handleChange}/>
                {this.state.name === "" && this.state.category === "" && this.props.favorites.length !== 0 && this.props.favorites.length > 1 ? this.props.favorites.map(favorite => <Favorite key={favorite.id} editFavorite={this.editFavorite} deleteFavorite={this.deleteFavorite} favorite={favorite}/>) :
                    this.state.name !== "" && this.props.favorites.length !== 0  ? this.filterFavoritesByName().map(favorite => <Favorite key={favorite.id} editFavorite={this.editFavorite} deleteFavorite={this.deleteFavorite} favorite={favorite}/>) : 
                    this.state.category !== "" && this.props.favorites.length !== 0 ? this.filterFavoritesByCategory().map(favorite => <Favorite key={favorite.id} editFavorite={this.editFavorite} deleteFavorite={this.deleteFavorite} favorite={favorite}/>) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // eventually filter by current user
    // .filter(favorites => {favorites.userId == 1})
    return {
        favorites: state.favorites.favorites,
        message: state.favorites.message,
        requesting: state.favorites.requesting
    }
}

export default connect(mapStateToProps, {getFavorites, editFavoriteFood, deleteFavoriteFood, addFavoriteFood})(Favorites)