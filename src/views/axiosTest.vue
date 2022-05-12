<template>
	<h1>Axios</h1>
	<button @click="getDataAll">all get</button>
	<button @click="getData">get</button>
	<button @click="postData">post</button>
	<button @click="deleteData">delete</button>

	<ul v-if="datas.type == 'getAll' ? true : false" style="text-align: left" class="font-NanumRegular">
		<li v-for="i in datas.data" :key="i.id">{{ i }}</li>
	</ul>
	<p v-else>{{ datas.data }}</p>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
	name: 'axiosTest',
	setup() {
		const datas = ref([]);
		const getDataAll = () => {
			axios
				.get('https://jsonplaceholder.typicode.com/todos/')
				.then(res => {
					datas.value = {
						type: 'getAll',
						data: res.data,
					};
					console.log(res);
					console.log(typeof res);
				})
				.catch(err => console.log(err));
		};

		const getData = () => {
			axios
				.get('https://jsonplaceholder.typicode.com/todos/' + 1)
				.then(res => {
					datas.value = {
						type: 'get',
						data: res.data,
					};
					console.log(res);
				})
				.catch(err => console.log(err));
		};

		const postData = () => {
			const json = { userId: 'kyj', title: 'postTest', completed: false };
			axios
				.post('https://jsonplaceholder.typicode.com/todos', json)
				.then(res => {
					datas.value = {
						type: 'post',
						data: res.data,
					};
					console.log(res);
				})
				.catch(err => console.log(err));
		};

		const deleteData = () => {
			axios
				.delete('https://jsonplaceholder.typicode.com/todos/1')
				.then(res => {
					datas.value =
						res.status == 200
							? {
									type: 'post',
									data: '삭제 성공',
							  }
							: {
									type: 'post',
									data: '삭제 실패',
							  };
					console.log(res);
				})
				.catch(err => console.log(err));
		};

		return { deleteData, postData, getData, getDataAll, datas };
	},
};
</script>
