<script setup lang="ts">
const model = defineModel<number>();
const scaleOptions = [1, 10, 50];
</script>
<template>
    <div class="scale-selector">
    <span>1 pixel =</span>
    <select v-model="model">
      <option v-for="option in scaleOptions" :key="option" :value="option">{{ option }}</option>
    </select>
    <span>{{ model && model > 1 ? 'years' : 'year' }}</span>
  </div>
</template>

<style lang="scss" scoped>
select {
    margin: 0.2em;
    margin-right: 0.4em;
    padding: 0.12em 0.4em;
    background: none;
    outline: none;
    color: #dde5ee;
    border: 1px solid #dde5ee;
  }
</style>