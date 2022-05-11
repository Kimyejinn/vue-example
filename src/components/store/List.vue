<template>
	<h2>List</h2>
	<div>
		<span>text : <input type="text" v-model="text" /></span>&nbsp;
		<button @click="add">추가</button>
	</div>
	<ul style="text-align: left">
		<li v-for="(i, index) in datas" :key="index">{{ i.id }} - {{ i.text }}</li>
	</ul>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
	name: 'list',
	setup() {
		const store = useStore();

		const datas = ref([
			{ id: 1, text: 'one' },
			{ id: 2, text: 'two' },
			{ id: 3, text: 'three' },
		]);
		const text = ref('');

		const add = () => {
			alert('add click' + text.value);
		};

		return { add, datas, text };
	},
};
</script>
