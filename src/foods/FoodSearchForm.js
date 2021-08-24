import React, {Component} from 'react'
import '../css/SearchForm.css'

class FoodSearchForm extends Component {

    state = {
        name: ""
    }

    onChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div className="searchform cf">
                <form onSubmit={(event) => this.submitSearch(event.target.search.value, event)} className="searchForm"> 
                <input onChange={this.onChange} type="text" name="foodItem" placeholder="Name of Food"></input>  
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default FoodSearchForm