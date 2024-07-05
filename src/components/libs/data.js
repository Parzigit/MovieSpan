import { RECEIVE_MOVIES } from '../commit';

const moviesReducer = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_MOVIES:
            return data;
        default:
            return state;
    }
};

export default moviesReducer;
