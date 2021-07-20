const getters = {
  getParentUsers: state => {
    return state.users.filter(user => user.parent_id === 0)
  },
  getChildUsers: state => {
    return state.users.filter(user => user.parent_id === state.users.id)
  }
}

export default getters
