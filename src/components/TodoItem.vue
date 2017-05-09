<template>
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model:checked="todo.completed">
      <label>{{todo.title}}</label>
      <button class="destroy" @click="$emit('removeSelf')"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>
</template>

<script lang="ts">
export default {
  props: ['todo']
};
</script>