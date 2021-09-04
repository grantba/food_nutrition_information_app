import React, {Component} from 'react'
import Food from './Food'
import '../css/SearchForm.css'
import '../css/index.css'
import {connect} from 'react-redux'
import {searchFoods, deleteSearch} from '../actions/foods'
import {addFavoriteFood} from '../actions/favorites'

class FoodSearchForm extends Component {

    state = {
        food_name: ""
    }

    componentWillUnmount() {
        this.props.deleteSearch()
    }

    searchFoods = (foodItem, event) => {
        event.preventDefault()
        this.props.searchFoods(foodItem)
        event.target.querySelector("input").value = ""
    }

    onChange = event => {
        this.setState({
            ...this.state,
            food_name: event.target.value
        })
    }

    render() {
        return (
            <div className="searchform cf">
                <form onSubmit={(event) => this.searchFoods(this.state.food_name, event)} className="searchForm"> 
                    <input onChange={this.onChange} type="text" name="foodItem" placeholder="Name of Food"></input>  
                    <button>Search</button>
                </form>
                {this.props.food.length !== 0 ? <Food food={this.props.food} addFavoriteFood={this.props.addFavoriteFood}/> : 
                    this.props.searchMessage !== "" ? <h2 className="error">{this.props.searchMessage}.<br></br>Please try again.</h2> : 
                    this.props.favoriteMessage !== "" ? <h2 className="error">{this.props.favoriteMessage}</h2> :
                    this.props.requesting ? <h2 className="loading">Loading...</h2> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        food: state.searchResult.searchResult,
        favoriteMessage: state.favorites.message,
        searchMessage: state.searchResult.message,
        requesting: state.searchResult.requesting
    }
}

export default connect(mapStateToProps, {searchFoods, deleteSearch, addFavoriteFood})(FoodSearchForm)