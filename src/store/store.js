import { createStore } from "vuex";

export default createStore({
  state: {
    selectedUser: JSON.parse(localStorage.getItem('selectedUser')) || null,
  },
  mutations: {
    setSelectedUser(state, user) {
        state.selectedUser = user;
        localStorage.setItem('selectedUser', JSON.stringify(user));
      },
  },
  getters: {
    getSelectedUser(state) {
        console.log('get', state)
        return state.selectedUser
      },
  },
  actions: {},
  modules: {},
});