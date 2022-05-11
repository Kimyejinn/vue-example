<template>
  <h1>Axios</h1>
  <button @click="getDataAll">all get</button>
  <button @click="getData">get</button>
  <button @click="postData">post</button>
  <button @click="deleteData">delete</button>
  <ul style="text-align: left">
    <li v-for="i in datas" :key="i.id">{{ i.id }} - {{ i.title }}</li>
  </ul>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "axiosTest",
  setup() {
    const datas = ref();
    const getDataAll = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => {
          datas.value = res.data;
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    const getData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/" + 1)
        .then((res) => {
          datas.value = res.data;
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    const postData = () => {
      const json = { userId: "kyj", title: "postTest", completed: false };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", json)
        .then((res) => {
          datas.value = res.data;
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    const deleteData = () => {
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => {
          datas.value = res.status == 200 ? "삭제 성공" : "삭제 실패";
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    return { deleteData, postData, getData, getDataAll, datas };
  },
};
</script>
