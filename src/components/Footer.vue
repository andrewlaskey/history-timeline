<script setup lang="ts">
import { ref } from 'vue';
import { Comparable } from '../types/Comparable';
import { people } from '../data/people'
import { states } from '../data/states'


type Props = {
    removeItem: (index: number) => void,
    clear: () => void,
    addSelection: (obj: Comparable) => void,
    compareSelections: Comparable[]
}

const props = defineProps<Props>();

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
//   ...people.map(({ range, label }) => ({ range: range || 80, label })),
//   ...states.map(({ range, label }) => ({ range: range || 80, label })),
]

const addSelectedObj = () => {
    const compareObj = compareList.find(obj => obj.label === selection.value);

    if (compareObj) {
        props.addSelection(compareObj);
    }
}

const selection = ref('Avg. Human Lifespan')
</script>

<template>
    <div class="footer">
        <div class="select-compare">
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
                <option v-for="obj in compareList" :key="obj.label">
                {{ obj.label }}
                </option>
            </select>
            <button @click="addSelectedObj">Add</button>
            <button @click="clear">Clear All</button>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.select-compare {
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