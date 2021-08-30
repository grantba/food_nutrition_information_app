import React, { Component } from 'react'
import '../css/index.css';
import FavoriteSearchForm from './FavoriteSearchForm'
import Favorite from './Favorite'
import {connect} from 'react-redux'
import {getFavorites, addFavorite} from '../actions/favorites'
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

    render() {
        const filteredFavorites = this.filterFavorites()
        return (
            <div>
                <Switch>
                    <Route exact path="/favorites">
                        <FavoriteSearchForm handleChange={this.handleChange}/>
                        <div className="flex">
                        {this.state.name === "" && this.props.favorites.length !== 0 ? this.props.favorites.map(favorite => <Favorite key={favorite.id} favorite={favorite}/>) :
                            this.state.name !== "" && this.props.favorites !== undefined ? filteredFavorites.map(favorite => <Favorite key={favorite.id} favorite={favorite}/>) : null}
                        </div>
                    </Route>
                    <Route exact path="/favorites/:id" component={(routeInfo) => {
                        const routeId = parseInt(routeInfo.match.params.id)
                        const favorite = this.props.favorites.find(favorite => favorite.id === routeId)
                        return <Favorite favorite={favorite}/>
                    }}>
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

export default connect(mapStateToProps, {getFavorites, addFavorite})(Favorites)
