import React, { Component } from 'react'
import '../css/index.css';
import FavoriteSearchForm from './FavoriteSearchForm'
import FavoriteEditForm from './FavoriteEditForm'
import FavoritesDisplay from './FavoritesDisplay'
import {connect} from 'react-redux'
import {getFavorites, editFavoriteFood, deleteFavoriteFood, addFavoriteFood} from '../actions/favorites'

class FavoritesContainer extends Component {

    state = {
        name: "",
        category: "",
        searchType: "name",
        editForm: false,
        editId: 0
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
        this.setState({...this.state, editForm: true, editId: favorite.id})
    }

    getEditFavorite = () => {
        return this.props.favorites.filter(favorite => {
            return favorite.id === this.state.editId
        })
    }

    handleEdit = (event) => {
        const foodItem = {
            thumbnail: event.target.thumbnail.value,
            food_name: event.target.food_name.value,
            food_category_type: event.target.category_type.value,
            calories: event.target.calories.value,
            total_fat: event.target.total_fat.value,
            saturated_fat: event.target.saturated_fat.value,
            cholesterol: event.target.cholesterol.value,
            sodium: event.target.sodium.value,
            total_carbohydrate: event.target.carbohydrate.value,
            dietary_fiber: event.target.fiber.value,
            sugars: event.target.sugars.value,
            protein: event.target.protein.value,
            potassium: event.target.potassium.value,
            serving_qty: event.target.serving_qty.value,
            serving_unit: event.target.serving_unit.value,
            serving_weight_grams: event.target.serving_weight.value,
            user_id: event.target.user_id.value,
            food_id: event.target.food_id.value,
            id: event.target.id // favorite_id
        }
        this.setState({...this.state, editForm: false, editId: 0})
        this.props.editFavoriteFood(foodItem)
    }

    render() {
        return (
            <div>
                <FavoriteSearchForm searchType={this.state.searchType} handleSearchType={this.handleSearchType} handleChange={this.handleChange}/>
                {this.state.editForm === true ? this.getEditFavorite().map(favorite => <FavoriteEditForm handleEdit={this.handleEdit} favorite={favorite}/>) :
                    this.state.name === "" && this.state.category === "" && this.props.favorites.length !== 0 && this.props.favorites.length > 1 ? this.props.favorites.map(favorite => <FavoritesDisplay key={favorite.id} editFavorite={this.editFavorite} deleteFavoriteFood={this.props.deleteFavoriteFood} favorite={favorite}/>) :
                    this.state.name !== "" && this.props.favorites.length !== 0  ? this.filterFavoritesByName().map(favorite => <FavoritesDisplay key={favorite.id} editFavorite={this.editFavorite} deleteFavoriteFood={this.props.deleteFavoriteFood} favorite={favorite}/>) : 
                    this.state.category !== "" && this.props.favorites.length !== 0 ? this.filterFavoritesByCategory().map(favorite => <FavoritesDisplay key={favorite.id} editFavorite={this.editFavorite} deleteFavoriteFood={this.props.deleteFavoriteFood} favorite={favorite}/>) :
                    this.props.requesting === true ? <h2 className="loading">Loading...</h2> : null}
                {/* {this.props.message !== "" ? alert(this.props.message) : null} */}
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

export default connect(mapStateToProps, {getFavorites, editFavoriteFood, deleteFavoriteFood, addFavoriteFood})(FavoritesContainer)