<template>
  <div>
    {{ title }} // tt: {{ tt }}
    <button @click="clickEvt">{{ BtnNeme }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  components: {},
  props: ["title"],
  setup(props, { emit }) {
    console.log(props.title);

    const tt = props.title; //testchange
    console.log(tt);

    const BtnNeme = props.title + "aa";

    const clickEvt = () => {
      alert("click");
    };

    return { clickEvt, BtnNeme, tt };
  },
};
</script>
