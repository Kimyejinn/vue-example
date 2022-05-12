export const List = {
	namespaced: true,
	state: { obj: {}, arr: [] },
	getters: {},
	mutations: {
		//동기
		insert(state, data) {
			state.obj[data.id] = {
				id: data.id,
				text: data.text,
			};
			state.arr.push(state.obj[data.id]);
		},
		delete(state, data) {
			state.arr = state.arr.filter(d => d.id !== data);
		},
	},
	actions: {
		//비동기
		add({ commit }, data) {
			commit('insert', data);
		},
		remove({ commit }, data) {
			commit('delete', data);
		},
	},
};
