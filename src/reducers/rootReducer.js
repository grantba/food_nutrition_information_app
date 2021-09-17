import {combineReducers} from "redux";
import favoritesReducer from './favoritesReducer';
import mealsReducer from "./mealsReducer";
import searchFoodsReducer from './searchFoodsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    meals: mealsReducer,
    searchResult: searchFoodsReducer,
    user: usersReducer
});

export default rootReducer;