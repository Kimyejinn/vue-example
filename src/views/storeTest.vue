<template>
	<h1>Store Document</h1>
	<a
		href="https://kyounghwan01.github.io/blog/Vue/vue3/composition-api-vuex/#store-%E1%84%8B%E1%85%A7%E1%84%85%E1%85%A5-module%E1%84%85%E1%85%A9-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%85%E1%85%B5"
		>참고 사이트</a
	>&nbsp;/&nbsp;<a href="https://vuex.vuejs.org/guide/actions.html">Vuex 공식문서</a>
	<hr />
	<p>
		<b>namespace ? <br /></b>
		- module의 이름을 getters, mutations, action 앞에 넣어주는 기능<br />
		- 다른 store, 같은 함수 이름을 사용해도 vuex가 헷갈리지 않음.<br />
		- 직관적<br />
	</p>
	<p>
		<b>namespaced가 true일 때 사용방법</b><br />
		state: state.모듈네임.스테이트네임 <br />
		getters: computed(()=> store.getters["모듈네임/게덜네임"]) <br />
		mutation: store.commit("모듈네임/뮤테이션네임",params) <br />
		action: store.dispatch("모듈네임/액션네임",params)<br />
	</p>

	<p><b>namespaced가 false일 때 사용방법</b><br /></p>

	<hr />
	<Basic />
	<hr />
	<Calculator />
	<hr />
	<List />
</template>

<script>
import Calculator from '@/components/store/Calculator.vue';
import Basic from '@/components/store/Basic.vue';
import List from '@/components/store/List.vue';

export default {
	name: 'axiosTest',
	components: { Calculator, Basic, List },
};
</script>
