<template>
	<h2>Calculator</h2>

	<div style="margin-bottom: 10px">
		x : <input type="number" v-model="data.x" /><br />
		y : <input type="number" v-model="data.y" /><br />
	</div>
	<div style="margin-bottom: 10px">
		<button @click="addition">+ 덧셈</button>
		<button @click="subtraction">- 뺄셈</button>
		<button @click="division">/ 나눗셈</button>
		<button @click="multiplication">* 곱셈</button>
	</div>
	<div style="margin-bottom: 30px">
		<p>x = {{ data.x }},&nbsp; y = {{ data.y }},&nbsp; result = {{ result }}<br /></p>
		<b style="color: red">계산식 : {{ cal }}</b>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const data = ref({
			x: 0,
			y: 0,
		});

		const store = useStore();
		const result = computed(() => store.state.Calculator.result);
		const cal = computed(() => store.state.Calculator.cal);
		const addition = () => store.dispatch('Calculator/addition', data.value);
		const subtraction = () => store.dispatch('Calculator/subtraction', data.value);
		const division = () => store.dispatch('Calculator/division', data.value);
		const multiplication = () => store.dispatch('Calculator/multiplication', data.value);

		return {
			x,
			y,
			data,
			result,
			cal,
			addition,
			subtraction,
			division,
			multiplication,
		};
	},
};
</script>
