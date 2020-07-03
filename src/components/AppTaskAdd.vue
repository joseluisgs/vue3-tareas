<template>
  <div>
    <h2>Añadir Tarea</h2>
    <hr />
    <form @submit.prevent="addTask">
      <input type="text" v-model="task" placeholder="Insertar tarea" />
      <input type="submit" value="Añadir Tarea" />
    </form>
  </div>
</template>

<script>
// Importamos las referencias reactivas
import { ref } from '@vue/composition-api';

export default {
  name: 'AppTaskAdd',
  // Objetos observables, muy parecido a lo que hacia data
  // Hace con ref que un objeto sea reactivo
  // https://vue-composition-api-rfc.netlify.app/api.html#ref
  // para envolver un valores primitivos o compuestos en un objeto Observable
  // y llevar el control de los cambios
  setup(props, { emit }) {
    // Modelo local
    const task = ref('');

    // Método local
    function addTask() {
      emit('addTask', task.value);
      task.value = '';
    }
    return { task, addTask };
  },
  // Vue 2
  // Modelo de datos
  // data() {
  //   return {
  //     task: '',
  //   };
  // },
  // methods: {
  //   // Añade una tarea, emitiendo un evento a la clase padre
  //   addTask() {
  //     this.$emit('addTask', this.task);
  //     this.task = '';
  //   },
  // },
};
</script>
