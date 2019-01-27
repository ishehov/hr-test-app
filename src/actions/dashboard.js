import { fetchPeople as fetchPeopleRequest } from '../api';

export const fetchPeople = () => dispatch => {
    dispatch(() => ({ type: 'FETCH_PEOPLE.REQUEST' }));
    fetchPeopleRequest()
        .then(people => dispatch(() => ({ type: 'FETCH_PEOPLE.DONE', people })));
};

export const movePersonId = (id, from, to) => ({
    type: 'MOVE_ID',
    id,
    from,
    to,
});

export const handleFilterChange = filterValue => ({
    type: 'CHANGE_FILTER',
    filterValue,
});
