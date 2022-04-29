import { all } from "@redux-saga/core/effects";
import movies from './../store/Movie/MovieSaga';
import peopleMovie from "../store/People/PeopleSaga";



export default function* rootSaga(){
  yield all([...movies, ...peopleMovie]);
}