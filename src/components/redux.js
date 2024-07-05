import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchData } from './movie'
import {REQUEST_MOVIES,receiveMovies} from './commit';

function* moviesList(action) {
   try {
        const data = yield call(fetchData);
        yield put(receiveMovies(data));
   } catch (e) {
        console.log(e);
   }
}


export default function* redsaga() {
  yield takeLatest(REQUEST_MOVIES, moviesList);
}
