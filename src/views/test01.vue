<template>
	<img alt="Vue logo" src="@/assets/logo.png" />
	<Button title="Save" @submit="submitEvt" />
	<HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Button from '@/components/Button.vue';

export default {
	name: 'test01',
	components: {
		HelloWorld,
		Button,
	},
	setup() {
		const submitEvt = pop => {
			console.log(pop);
		};

		return { submitEvt };
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
