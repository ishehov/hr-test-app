import {
    FETCH_PEOPLE_REQUEST,
    FETCH_PEOPLE_DONE,
    FETCH_PEOPLE_ERROR,
    MOVE_ID,
    CHANGE_FILTER,
} from '../constants';
import { fetchPeople as fetchPeopleRequest } from '../api';

const fetchPeopleRequestAction = () => ({ type: FETCH_PEOPLE_REQUEST });

const fetchPeopleDoneAction = people => ({ type: FETCH_PEOPLE_DONE, people });

const fetchPeopleErrorAction = err => ({ type: FETCH_PEOPLE_ERROR, err });

export const fetchPeople = () => dispatch => {
    dispatch(fetchPeopleRequestAction());
    fetchPeopleRequest()
        .then(people => dispatch(fetchPeopleDoneAction(people)))
        .catch(err => dispatch(fetchPeopleErrorAction(err)));
};

export const movePersonId = (id, from, to) => ({
    type: MOVE_ID,
    id,
    from,
    to,
});

export const handleFilterChange = filterValue => ({
    type: CHANGE_FILTER,
    filterValue,
});
