<template>
  <div>
    <h1>Tareas</h1>
    <hr />
    <ul style="text-align:center">
      <!-- listamos las tareas -->
      <li v-for="(task, $index) in tasks" :key="$index">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppTaskList',
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
li {
  text-align:center;
}
ul {
    text-align: center;
    list-style-position: inside;
}
</style>
