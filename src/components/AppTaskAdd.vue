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
export default {
  name: 'AppTaskAdd',
  // Modelo de datos
  data() {
    return {
      task: '',
    };
  },
  methods: {
    // Añade una tarea, emitiendo un evento a la clase padre
    addTask() {
      this.$emit('addTask', this.task);
      this.task = '';
    },
  },
};
</script>
