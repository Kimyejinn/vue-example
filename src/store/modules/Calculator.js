export const Calculator = {
	namespaced: true,
	state: { result: 0, cal: '' },
	getters: {},
	mutations: {
		add(state, data) {
			state.result = data.x + data.y;
			state.cal = `${data.x} + ${data.y} = ${state.result}`;
		},
		sub(state, data) {
			state.result = data.x - data.y;
			state.cal = `${data.x} - ${data.y} = ${state.result}`;
		},
		div(state, data) {
			state.result = data.x / data.y;
			state.cal = `${data.x} / ${data.y} = ${state.result}`;
		},
		mul(state, data) {
			state.result = data.x * data.y;
			state.cal = `${data.x} * ${data.y} = ${state.result}`;
		},
	},
	actions: {
		addition({ commit }, data) {
			commit('add', data);
		},
		subtraction({ commit }, data) {
			commit('sub', data);
		},
		division({ commit }, data) {
			if (data.x == 0 && data.y == 0) {
				alert('정의되지 않은 결과입니다.');
			} else if (data.y == 0) {
				alert('0으로 나눌 수 없습니다.');
			} else {
				commit('div', data);
			}
		},
		multiplication({ commit }, data) {
			commit('mul', data);
		},
	},
};
