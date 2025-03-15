<script setup lang="ts">
import { computed, ref } from 'vue';
import { Comparable } from '../types/Comparable';
import { compareList } from '../data/compareables';
import ScaleSelector from './ScaleSelector.vue';


type Props = {
    removeItem: (index: number) => void,
    clear: () => void,
    addSelection: (obj: Comparable) => void,
    compareSelections: Comparable[]
    scale: number,
    totalYears: number
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:scale', value: number): void;
}>();

const localScale = computed({
  get: () => props.scale,
  set: (value: number) => emit('update:scale', value)
});

const addSelectedObj = () => {
    const compareObj = compareList.find(obj => obj.label === selection.value);

    if (compareObj) {
        props.addSelection(compareObj);
    }
}

const selectableCompareOptions = computed(() => {
  return compareList.filter(compareable => compareable.range < props.totalYears);
})

const selection = ref('Avg. Human Lifespan')
</script>

<template>
    <div class="footer">
      <div class="footer-control">
        <h3>Comparisons</h3>
        <ul class="compare-selections">
          <li
          v-for="(compare, idx) in compareSelections"
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
              <option v-for="obj in selectableCompareOptions" :key="obj.label">
              {{ obj.label }}
              </option>
          </select>
          <button @click="addSelectedObj">Add</button>
          <button @click="clear">Clear All</button>
        </div>
      </div>
      <div class="footer-control">
        <h3>Scale</h3>
        <ScaleSelector v-model="localScale" />
      </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  max-width: 28rem;
}

.footer-control {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #151618;
  border: 1px solid;
  border-color: #dde5ee;

  h3 {
    margin-top: 0;
  }

  button, select {
    margin: 0.2em;
    padding: 0.3em 0.8em;
    background: none;
    outline: none;
    color: #dde5ee;
    border: 1px solid #dde5ee;
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