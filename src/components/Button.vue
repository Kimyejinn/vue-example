<template>
	<div>
		{{ title }}&nbsp;<button @click="clickEvt">{{ BtnNeme }}</button>
	</div>
</template>

<script>
export default {
	name: 'Button',
	components: {},
	props: ['title'],
	setup(props, { emit }) {
		const BtnNeme = props.title + 'Btn';

		const clickEvt = () => {
			alert('click');
		};

		return { clickEvt, BtnNeme };
	},
};
</script>
