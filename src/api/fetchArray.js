import axios from 'axios'

const fetchArray = () => axios( {
    method: 'get',
    url: 'https://randomuser.me/api/?nat=gb&results=5',
    responseType: 'json'
})
    .then(({ data: { results } }) => {
        return results;
    })
    .catch(function (error) {
        console.log(error);
    });

export default fetchArray