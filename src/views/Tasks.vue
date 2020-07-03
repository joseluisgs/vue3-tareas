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
import AppTaskList from '@/components/AppTaskList.vue';
import AppTaskSearch from '@/components/AppTaskSearch.vue';
import AppTaskAdd from '@/components/AppTaskAdd.vue';
// nuestro espacio
import useTasksSpace from '@/use/tasksSpace';
// Los elementos qe usaremos
// import {
//   computed, watch, reactive, toRefs,
// } from '@vue/composition-api';

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
    // podemos exportar las funciones compositoras y luego importarlas
    // a través de la función setup allá donde sea necesario.
    return { ...useTasksSpace() };
    // // Referencias observables. recuerda todo esta en value
    // // const tasks = ref(taskList);
    // // const search = ref('');

    // // usamos la propiedad reactive, que es un proxy reactivo
    // // similar a la función data() de Vue 2
    // // https://vue-composition-api-rfc.netlify.app/api.html#reactive
    // const tasksData = reactive({
    //   tasks: taskList,
    //   search: '',
    // eslint-disable-next-line max-len
    //   filteredTasks: computed(() => tasksData.tasks.filter((task) => task.title.includes(tasksData.search))),
    // });

    // // Mi métodos
    // function addTask(task) {
    //   tasksData.tasks.push({
    //     title: task,
    //     completed: false,
    //   });
    // }
    // // Convierte un objeto reactivo e un objeto plano
    // // https://vue-composition-api-rfc.netlify.app/api.html#toref
    // const { tasks, search } = toRefs(tasksData);
    // // Si necesitamos actuar cuando un valor se actualiza,
    // // podemos usar la función watch de la Composition API
    // // para llevar el control de forma reactiva de cualquier propiedad.
    // // https://vue-composition-api-rfc.netlify.app/api.html#watch
    // // es interesante respecto a las computed, si hacemos operaciones asíncronas
    // watch(() => {
    //   console.log(tasks.value.length);
    // });

    // watch(search, (newSearch, oldSearch) => {
    //   console.log(`Antes buscabas ${oldSearch} y ahora buscas ${newSearch}`);
    // });

    // // Campos computados
    // // https://vue-composition-api-rfc.netlify.app/api.html#computed
    // // podemos retornar un objeto reactivo que actualizará cuando sus dependencias cambien
    // eslint-disable-next-line max-len
    // // const filteredTasks = computed(() => tasks.value.filter((task) => task.title.includes(search.value)));

    // // Devolvemos lo que vamos a usar en el componente
    // // return {
    // //   tasks, search, addTask, filteredTasks,
    // // };
    // return { ...toRefs(tasksData), addTask };
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
