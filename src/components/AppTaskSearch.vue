<template>
  <div>
    <h2>Buscar Tareas</h2>
    <hr />
    <!-- Emitimos el evento de la clase padre -->
    <input
      type="search"
      :value="search"
       @input="input($event.target.value)"
      placeholder="buscar..."
    />
  </div>
</template>

<script>
export default {
  name: 'AppTaskSearch',
  // Función setup. Se ejecuta antes de todo,
  // Por eos no hay this como queremos
  // Propiedades es lo que recibe
  // Context es el this que antes usariamos
  setup(props, context) {
    function input(value) {
      context.emit('input', value);
    }
    // Se retorna lo que usemos en el componente
    return { input };
  },
  // Vue 2
  // // Propiedad
  // props: ['search'],
  // methods: {
  //   input(value) {
  //     this.$emit('input', value);
  //   },
  // },
};
</script>
