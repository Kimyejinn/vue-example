<template>
	<Menu />
	<div class="font-NanumRegular">
		<router-view></router-view>
	</div>
</template>

<script>
import Menu from '@/views/menu';

export default {
	components: { Menu },
};
</script>
