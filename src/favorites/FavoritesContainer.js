import React, { Component } from 'react'
import '../css/index.css';
import FavoriteSearchForm from './FavoriteSearchForm'
import FavoriteEditForm from './FavoriteEditForm'
import FavoritesDisplay from './FavoritesDisplay'
import {connect} from 'react-redux'
import { Switch, Route } from 'react-router-dom'
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
        if (this.props.user.loggedIn === true) {
            this.props.getFavorites()
        }
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
        event.preventDefault()
        if (event.target.id === "cancel") {
            this.setState({...this.state, editForm: false, editId: 0}) 
        } else {
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
            alert("Your favorite has been upated.")
        }
    }

    render() {
        if (this.props.user.loggedIn === false) return <h2 className="loading">You must have an account to create favorites.</h2>
        if (!!this.props.requesting) return <h2 className="loading">Loading...</h2>
        if (this.props.requesting === false && this.props.message === "" && this.props.favorites.length === 0) return <h2 className="empty-message">You have no favorites saved at this time. Visit the Search Foods tab to search foods that you can add to your list of favorites or use to create meals.</h2>
        return (
            <div>
                <Switch>
                <Route exact path="/favorites/:id" component={FavoritesDisplay}/>
                <Route exact path="/favorites" >
                <FavoriteSearchForm searchType={this.state.searchType} handleSearchType={this.handleSearchType} handleChange={this.handleChange}/>
                {this.state.editForm ? this.getEditFavorite().map(favorite => <FavoriteEditForm key={favorite.id} handleEdit={this.handleEdit} favorite={favorite}/>) :
                    this.state.name === "" && this.state.category === "" && this.props.favorites.length !== 0 ? this.props.favorites.map(favorite => <FavoritesDisplay key={favorite.id} editFavorite={this.editFavorite} deleteFavoriteFood={this.props.deleteFavoriteFood} favorite={favorite}/>) :
                    this.state.name !== "" && this.props.favorites.length !== 0  ? this.filterFavoritesByName().map(favorite => <FavoritesDisplay key={favorite.id} editFavorite={this.editFavorite} deleteFavoriteFood={this.props.deleteFavoriteFood} favorite={favorite}/>) : 
                    this.state.category !== "" && this.props.favorites.length !== 0 ? this.filterFavoritesByCategory().map(favorite => <FavoritesDisplay key={favorite.id} editFavorite={this.editFavorite} deleteFavoriteFood={this.props.deleteFavoriteFood} favorite={favorite}/>) 
                    :null}</Route>
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
        message: state.favorites.message,
        requesting: state.favorites.requesting,
        user: state.user
    }
}

export default connect(mapStateToProps, {getFavorites, editFavoriteFood, deleteFavoriteFood, addFavoriteFood})(FavoritesContainer)