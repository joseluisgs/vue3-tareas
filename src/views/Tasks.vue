<template>
  <div>
    <!-- Componente de buscar -->
    <AppTaskSearch v-model="search" />
    <!-- Componente de la lista a través de filtro -->
    <AppTaskList :tasks="filteredTasks" />
    <!-- Componente para añadir tarea -->
    <AppTaskAdd @addTask="addTask" />
  </div>
</template>

<script>
import tasks from '@/api/tasks';
import AppTaskList from '@/components/AppTaskList.vue';
import AppTaskSearch from '@/components/AppTaskSearch.vue';
import AppTaskAdd from '@/components/AppTaskAdd.vue';

export default {
  name: 'Tasks',
  created() {
    this.tasks = tasks;
  },
  data() {
    return {
      tasks: [],
      search: '',
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push({
        title: task,
        completed: false,
      });
    },
  },
  components: {
    AppTaskList,
    AppTaskSearch,
    AppTaskAdd,
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((task) => task.title.includes(this.search));
    },
  },
};
</script>
