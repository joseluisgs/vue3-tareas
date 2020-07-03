<template>
  <div>
    <h1>Tareas</h1>
    <hr />
    <ul>
      <!-- listamos las tareas -->
      <li v-for="(task, $index) in tasks" :key="$index">{{ task.title }}</li>
    </ul>
    <h6>Tareas completadas</h6>
    <ul>
      <li v-for="(task, $index) in completedTasks" :key="$index">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'AppTaskList',
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  computed: {
    completedTasks() {
      return store.getters.completedTasks;
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
