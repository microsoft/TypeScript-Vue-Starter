<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{itemsLeft}}</strong> {{itemSingularOrPlural}} left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <router-link to="/" :class="{ selected: !isActive && !isCompleted }" >All</router-link>
      </li>
      <li>
        <router-link to="/active":class="{ selected: isActive }">Active</router-link>
      </li>
      <li>
        <router-link to="/completed" :class="{ selected: isCompleted }">Completed</router-link>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" @click="clearCompleted()">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['itemsLeft', 'clearCompleted', 'currentView'],
  computed: {
    itemSingularOrPlural(): string {
      return this.itemsLeft === 1 ? 'item' : 'items';
    },
    isActive(): boolean {
      return this.currentView === 'active';
    },
    isCompleted(): boolean {
      return this.currentView === 'completed';
    }
  }
});
</script>