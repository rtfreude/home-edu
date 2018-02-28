const FETCH_USER = 'fetch_user';

export function AuthReducer(state = null, action) {
  console.log('THIS IS THE REDUCER TYPE')
  console.log(action)
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
