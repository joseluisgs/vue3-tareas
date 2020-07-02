<template>
  <div>
    <h2>Buscar Tareas</h2>
    <hr />
    <!-- Emitimos el evento de la clase padre -->
    <input
      type="search"
      :value="search"
      @input="$emit('input', $event.target.value)"
      placeholder="buscar..."
    />
  </div>
</template>

<script>
export default {
  name: 'AppTaskSearch',
  // Propiedad
  props: ['search'],
};
</script>
