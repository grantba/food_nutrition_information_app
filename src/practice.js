import React, {Component} from 'react'
import Movie from './Movie'
import '../css/MovieSearchForm.css'
import '../css/index.css'
import {connect} from 'react-redux'

class MoviesSearchForm extends Component {

    state = {
        name: ""
    }

    searchMovies = (event) => {
        event.preventDefault()
        this.props.dispatch(searchMovies(this.state.name))
    }

    onChange = event => {
        this.setState({...this.state, name: event.target.value})
    }

    render() {
        return (
            <div className="movies-container">
                <form onSubmit={this.searchMovies}> 
                    <input onChange={this.onChange} type="text" name="name" placeholder="Name of Movie"></input>  
                    <button>Search</button>
                </form>
                {this.props.movie.length !== 0 ? <Movie movie={this.props.movie} 
                    addFavoriteMovie={this.props.addFavoriteMovie}/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movies
    }
}

export default connect(mapStateToProps, {searchMovies, addFavoriteMovie})(MoviesSearchForm)







