
import { COLUMNS } from '../constants';

const defaultState = {
    loading: false,
    people: [],
    filterValue: '',
    ...Object.assign({}, ...COLUMNS.map(el => ({ [el]: [] }))),
};

export default (state = defaultState, action, ...rest) => {
    switch (action.type) {
        case 'FETCH_PEOPLE.LOADING':
            console.log(state, action, rest);
            return state;
        case 'FETCH_PEOPLE.DONE':
            console.log(state, action, rest);
            return state;
        case 'MOVE_ID':
            // console.log(state, action, rest);
            return state;
        case 'CHANGE_FILTER':
            // console.log(state, action, rest);
            return state;
        default:
            // console.log(state, action, rest);
            return state;
    }
};
