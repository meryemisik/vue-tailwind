import { createStore } from "vuex";

export default createStore({
  state: {
    selectedTab: "todos",
    selectedUser: JSON.parse(localStorage.getItem('selectedUser')) || null,
  },
  mutations: {
    setSelectedTab(state, tabName) {
      state.selectedTab = tabName;
    },
    setSelectedUser(state, user) {
        state.selectedUser = user;
        localStorage.setItem('selectedUser', JSON.stringify(user));
      },
  },
  getters: {
    getSelectedTab(state) {
      return state.selectedTab
    },
    getSelectedUser(state) {
        console.log('get', state)
        return state.selectedUser
      },
  },
  actions: {},
  modules: {},
});