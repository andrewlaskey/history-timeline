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
    label: 'Avg. Human Lifespan',
  },
  {
    range: 246,
    label: 'USA',
  },
  {
    range: 272,
    label: 'Avg. Greenland Shark Lifespan'
  },
  ...people.map(({ range, label }) => ({ range: range || 80, label })),
  ...states.map(({ range, label }) => ({ range: range || 80, label })),
]

const selected = reactive<Comparable[]>([])
const selection = ref('Avg. Human Lifespan')

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

const removeItem = (idx: number): void => {
  selected.splice(idx, 1);
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
  <div class="info">
    <a href="https://github.com/andrewlaskey/history-timeline" target="_blank">github.com/andrewlaskey/history-timeline</a>
  </div> 
  <div class="select-compare">
    <h3>Comparisons</h3>
    <ul class="compare-selections">
      <li
        v-for="(compare, idx) in selected"
        :key="`${compare.label}-${idx}`"
      >
        <span>{{  compare.label }}</span>
        <button @click="removeItem(idx)">
          <span>x</span>
        </button>
      </li>
    </ul>
    <div class="compare-input">
    <select v-model="selection">
      <option v-for="obj in compareList" :key="obj.label">
        {{ obj.label }}
      </option>
    </select>
    <button @click="addSelection">Add</button>
    <button @click="clear">Clear All</button>
  </div>
  </div>
</template>

<style lang="scss">
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
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 1rem;
  background-color: #151618;
  border: 1px solid;
  border-color: #dde5ee;

  h3 {
    margin-top: 0;
  }
}

.info {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1rem;

  a {
    color: #9198e5;
  }
}

.compare-selections {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0.5rem;

  }

  li > span {
    flex-grow: 1;
    padding-right: 0.5rem;
    text-align: left;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    outline: none;
    color: #dde5ee;
    border: 1px solid #dde5ee;
    height: 1rem;
    width: 1rem;
    line-height: 0.5em;
  }
}
</style>
