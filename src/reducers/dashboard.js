
import {
    COLUMNS,
    FETCH_PEOPLE_REQUEST,
    FETCH_PEOPLE_DONE,
    FETCH_PEOPLE_ERROR,
    MOVE_ID,
    CHANGE_FILTER,
} from '../constants';

const defaultState = {
    loading: false,
    fetchError: null,
    people: {
        // id: personObj
    },
    filterValue: '',
    columns: {
        // This gives us a possibility to define in constants as much columns as we want
        ...Object.assign({}, ...COLUMNS.map(el => ({ [el]: [] }))),
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PEOPLE_REQUEST:
            return { ...state, loading: true, fetchError: null };
        case FETCH_PEOPLE_DONE:
            return {
                ...state,
                loading: false,
                // Building map of persons by id { id: personObj };
                people: action.people.reduce((acc, curr) => {
                    acc[curr.id.value] = curr;
                    return acc;
                }, {}),
                // fill first column with people id's
                columns: {
                    ...state.columns,
                    [COLUMNS[0]]: action.people.map(person => person.id.value),
                },
            };
        case FETCH_PEOPLE_ERROR:
            return { ...state, fetchError: action.err };
        case MOVE_ID: {
            const { from, to, id } = action;

            if (state.columns[from].includes(id)) {
                return {
                    ...state,
                    columns: {
                        ...state.columns,
                        [from]: state.columns[from].filter(el => (id !== el)),
                        [to]: state.columns[to].concat(id),
                    },
                };
            }

            return state;
        }
        case CHANGE_FILTER:
            return { ...state, filterValue: action.filterValue };
        default:
            return state;
    }
};
