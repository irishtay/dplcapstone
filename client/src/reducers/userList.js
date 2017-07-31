const userList = ( state= [], action ) => {
  switch (action.type) {
    case 'USERS':
      return action.users
    default:
      return state;
  }
}

export default userList;
