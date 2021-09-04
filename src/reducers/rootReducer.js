import {combineReducers} from "redux";
import favoritesReducer from './favoritesReducer';
import searchFoodsReducer from './searchFoodsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    searchResult: searchFoodsReducer,
    user: usersReducer
});

export default rootReducer;