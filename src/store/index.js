import { createStore } from "vuex";

export default createStore({
	state: {
		isAuthenticated: false,
		user: null,
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
			state.isAuthenticated = true;
		},
		removeUser(state) {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
	actions: {},
	modules: {},
});
