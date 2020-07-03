// Extrapolamos la funcionalidad del un componente
//  Para ello (entre otras técnicas) podemos exportar
// las funciones compositoras y luego importarlas a través de
// la función setup allá donde sea necesario
// https://vue-composition-api-rfc.netlify.app/#logic-extraction-and-reuse

import store from '@/store';
import {
  computed, watch, reactive, toRefs,
} from '@vue/composition-api';

export default function useTasksSpace() {
  const tasksData = reactive({
    // tasks: taskList,
    tasks: store.state.tasks,
    search: '',
    // eslint-disable-next-line max-len
    filteredTasks: computed(() => tasksData.tasks.filter((task) => task.title.includes(tasksData.search))),
  });

  function addTask(task) {
    // tasksData.tasks.push({
    //   title: task,
    //   completed: false,
    // });
    store
      .dispatch('checkTaskProfanity', {
        title: task,
        completed: true,
      })
      .catch((error) => alert(error));
  }

  const { tasks, search } = toRefs(tasksData);

  watch(() => {
    console.log(tasks.value.length);
  });

  watch(search, (newSearch, oldSearch) => {
    console.log(`Antes buscabas ${oldSearch} y ahora buscas ${newSearch}`);
  });

  return { ...toRefs(tasksData), addTask };
}
