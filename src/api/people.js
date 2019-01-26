import axios from 'axios'
import { API_URL } from '../constants';

export const fetchPeople = (nat = 'gb', count = '5') => axios( {
    method: 'get',
    url: `${API_URL}/?nat=${nat}&results=${count}`,
    responseType: 'json'
})
    .then(({ data: { results } }) => {
        return results;
    })
    .catch(error => {
        throw new Error(error);
    });

export default fetchPeople;
