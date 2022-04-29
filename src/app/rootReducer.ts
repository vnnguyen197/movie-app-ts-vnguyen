import  movies from './../store/Movie/MovieSlice';
import people from "../store/People/PeopleSlice";
import { combineReducers } from "@reduxjs/toolkit";


const reducer = combineReducers({
  movies,
  people, 
});

export default reducer;