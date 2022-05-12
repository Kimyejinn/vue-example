<template>
	<h2>List</h2>
	<div>
		<span>text : <input type="text" ref="focusText" v-model="text" /></span>&nbsp;
		<button @click="add">추가</button>
	</div>
	<ul style="text-align: left">
		<li v-for="(i, index) in datasArr" :key="index"><button @click="remove(i.id)">X</button>&nbsp;{{ i.id }} - {{ i.text }}</li>
	</ul>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
export default {
	name: 'list',
	setup() {
		const store = useStore();
		const datasObj = computed(() => store.state.List.obj);
		const datasArr = computed(() => store.state.List.arr);

		const text = ref('');
		const focusText = ref(null);

		const add = () => {
			if (text.value != '') {
				var data = {
					id: new Date().getTime().toString(36),
					text: text.value,
				};

				store.dispatch('List/add', data);
			} else {
				alert('text를 입력해주세요');
				focusText.value.focus();
			}
		};

		const remove = id => {
			store.dispatch('List/remove', id);
		};

		return { add, remove, text, datasObj, datasArr, focusText };
	},
};
</script>
