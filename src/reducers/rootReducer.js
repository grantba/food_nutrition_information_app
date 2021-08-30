import {combineReducers} from "redux";
import favoritesReducer from './favoritesReducer';
import searchFoodsReducer from './searchFoodsReducer';

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    searchResult: searchFoodsReducer
});

export default rootReducer;