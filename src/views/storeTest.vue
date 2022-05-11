<template>
  <h1>Store</h1>
  <button @click="inc">+</button>&nbsp; <button @click="dec">-</button>&nbsp;
  <button @click="reset">0</button>
  <p>{{ counter }}</p>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "axiosTest",
  setup() {
    const store = useStore();
    const counter = computed(() => store.state.sample.counter);

    const inc = () => store.dispatch("sample/increment");
    const dec = () => store.commit("sample/decreaseCounter");
    const reset = () => store.commit("sample/setCounter", 0);

    return { counter, inc, dec, reset };
  },
};
</script>
