<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import Timeline from './components/Timeline.vue'
import CompareObject from './components/CompareObject.vue'
import Footer from './components/Footer.vue'
import { Comparable } from './types/Comparable'
import ScaleSelector from './components/ScaleSelector.vue'

const selected = reactive<Comparable[]>([])

const scale = ref<number>(1);
const totalYears = computed(() => 12000 * scale.value);

const addSelection = (obj: Comparable): void => {
  selected.push(obj)
}

const removeItem = (idx: number): void => {
  selected.splice(idx, 1);
}

const clear = (): void => {
  selected.splice(0)
}
</script>

<template>
  <a class="info" href="https://github.com/andrewlaskey/history-timeline/issues" target="_blank">
    <svg class="icon icon-github"><use xlink:href="#icon-github"></use></svg>
    <span>Suggest an addition</span>
  </a>
  <h1>The Past {{ totalYears.toLocaleString() }} Years</h1>
  <ScaleSelector v-model="scale" />
  <Timeline :total-years="totalYears" :scale="scale"/>
  <CompareObject
    v-for="obj in selected"
    :key="obj.label"
    :range="obj.range"
    :label="obj.label"
    :scale="scale"
  />
  <Footer
    :clear="clear"
    :compare-selections="selected"
    :remove-item="removeItem"
    :add-selection="addSelection"
    v-model:scale="scale"
    :total-years="totalYears"
  />
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dde5ee;
  background: #151618;
  padding-top: 8rem;
  padding-bottom: 18rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: 600px) {
    padding: 60px 60px 220px;
  }
}

.info {
  position: absolute;
  left: 1em;
  top: 1em;
  text-align: left;
  color: #9198e5;
  text-decoration: none;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  margin-right: 0.3em;
}

.visually-hidden {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
</style>
