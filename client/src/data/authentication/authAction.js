import axios from 'axios';
const FETCH_USER = 'fetch_user';

export const fetchUser = () => async dispatch => {
  console.log('Response from fetchUser')
  const res = await axios.get('/api/current_user')
  console.log(res)
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
};
