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
import taskList from '@/api/tasks';
import AppTaskList from '@/components/AppTaskList.vue';
import AppTaskSearch from '@/components/AppTaskSearch.vue';
import AppTaskAdd from '@/components/AppTaskAdd.vue';
// Los elementos qe usaremos
import { ref, computed } from '@vue/composition-api';

export default {
  name: 'Tasks',
  components: {
    AppTaskList,
    AppTaskSearch,
    AppTaskAdd,
  },
  // función setup
  // Ref sería nuestro data(),
  // fuction seria nuestros methods
  // computed seria nuestros computed
  setup() {
    // Referencias observables. recuerda todo esta en value
    const tasks = ref(taskList);
    const search = ref('');

    // Mi métodos
    function addTask(task) {
      tasks.value.push({
        title: task,
        completed: false,
      });
    }

    // Campos computados
    // https://vue-composition-api-rfc.netlify.app/api.html#computed
    // podemos retornar un objeto reactivo que actualizará cuando sus dependencias cambien
    // eslint-disable-next-line max-len
    const filteredTasks = computed(() => tasks.value.filter((task) => task.title.includes(search.value)));

    // Devolvemos lo que vamos a usar en el componente
    return {
      tasks, search, addTask, filteredTasks,
    };
  },
  // Vue 2
  // created() {
  //   this.tasks = tasks;
  // },
  // data() {
  //   return {
  //     tasks: [],
  //     search: '',
  //   };
  // },
  // methods: {
  //   addTask(task) {
  //     this.tasks.push({
  //       title: task,
  //       completed: false,
  //     });
  //   },
  // },
  // computed: {
  //   filteredTasks() {
  //     return this.tasks.filter((task) => task.title.includes(this.search));
  //   },
  // },

};
</script>
