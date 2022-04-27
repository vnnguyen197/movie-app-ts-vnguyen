import { MovieAPI } from 'services/MovieAPI';
import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  getDetailMovieFail,
  getDetailMovieRequest,
  getDetailMovieSuccess,
  getListMoviesFail,
  getListMoviesRequest,
  getListMoviesSuccess
} from "./MovieSlice";

function* getListMovies(action) {
  try {
    const dataResult = yield call(MovieAPI.getList, action.payload);
    yield delay(500);
    yield put(getListMoviesSuccess(dataResult.results));
  } catch (error) {
    yield put(getListMoviesFail(error));
  }
}

function* getDetailMovie(action) {
  try {
    const response = yield call(MovieAPI.getDetailMovie, action.payload.id);
    yield put(getDetailMovieSuccess(response));
  } catch (error) {
    yield put(getDetailMovieFail(error));
  }
}

function* watchGetList() {
  yield takeLatest(getListMoviesRequest, getListMovies);
}
function* watchGetDetail() {
  yield takeLatest(getDetailMovieRequest.type, getDetailMovie);
}

const saga = [watchGetList(), watchGetDetail()];
export default saga;
