const githubReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        loading: false,
        users: action.payload,
      }

    case 'SEARCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      }

    case 'GET_USER_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default githubReducer
