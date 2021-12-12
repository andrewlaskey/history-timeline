<script setup lang="ts">
import Timeline from './components/Timeline.vue'
import CompareObject from './components/CompareObject.vue'
import { Comparable } from './types/Comparable'
import { people } from './data/people'
import { states } from './data/states'
import { reactive, ref } from '@vue/reactivity'

const compareList: Comparable[] = [
  {
    range: 80,
    label: 'Avg. Lifespan',
  },
  {
    range: 246,
    label: 'USA',
  },
  ...people.map(({ range, label }) => ({ range: range || 80, label })),
  ...states.map(({ range, label }) => ({ range: range || 80, label })),
]

const selected = reactive<Comparable[]>([])
const selection = ref('Avg. Lifespan')

const addSelection = (): void => {
  const compareObj = compareList.find((obj) => obj.label === selection.value)

  if (compareObj) {
    selected.push(compareObj)
  }
}

const removeSelection = (): void => {
  const compareObj = compareList.find((obj) => obj.label === selection.value)

  if (compareObj) {
    const idx = selected.findIndex((obj) => obj.label === compareObj.label)

    if (idx > -1) {
      selected.splice(idx, 1)
    }
  }
}

const clear = (): void => {
  selected.splice(0)
}
</script>

<template>
  <h1>The Past 12,000 Years</h1>
  <h4>1 pixel = 1 year</h4>
  <Timeline />
  <CompareObject
    v-for="obj in selected"
    :key="obj.label"
    :range="obj.range"
    :label="obj.label"
  />
  <div class="select-compare">
    <select v-model="selection">
      <option v-for="obj in compareList" :key="obj.label">
        {{ obj.label }}
      </option>
    </select>
    <button @click="addSelection">Add</button>
    <button @click="removeSelection">Remove</button>
    <button @click="clear">Clear All</button>
  </div>
</template>

<style>
body {
  margin: 0;
}

body.is-fixed {
  overflow: hidden;
  height: 100%;
  touch-action: none;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dde5ee;
  background: #151618;
  padding: 60px 60px 220px;
}

.select-compare {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 1rem;
}
</style>
