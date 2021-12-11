<script setup lang="ts">
import { yearToCalendarYear, calendarYearToYear } from '../common/convert-year'
import { events } from '../data/events'
import { people } from '../data/people'
import { states } from '../data/states'
import { DataPoint } from '../types/DataPoint'

const totalYears = 12000
const range = 500
const numGridLines = totalYears / range

const entryPosition = (calendarYear: string): string => {
  return `${calendarYearToYear(calendarYear, totalYears)}px`
}

const entryStyle = (entry: DataPoint): Record<string, unknown> => {
  const top = entryPosition(entry.year)
  const height = entry.range ? `${entry.range}px` : 'auto'

  return {
    top,
    height,
  }
}

const dataPoints = [...events, ...people, ...states]
</script>

<template>
  <div class="timeline">
    <div class="axis-lines">
      <div
        class="grid-line"
        v-for="n in numGridLines"
        :key="n"
        :style="{ top: n * range + 'px' }"
      >
        {{ n * range }} ({{ yearToCalendarYear(n * range, totalYears) }})
      </div>
    </div>

    <div
      v-for="entry in dataPoints"
      :key="entry.label"
      :class="[entry.kind, entry.category]"
      :style="entryStyle(entry)"
    >
      <a :href="entry.link" target="_blank">{{ entry.label }}</a>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  margin: 0 auto;
  height: 12000px;
  width: 600px;
  background-color: rgb(32, 32, 32);
  background: repeating-linear-gradient(
    transparent,
    transparent 97px,
    #9198e5 97px,
    #9198e5 100px
  );
  background-size: 50px 100px;
  background-repeat: repeat-y;
}

.grid-line {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid;
  text-align: left;
}

.event,
.range {
  position: absolute;
  padding: 4px 8px;
  border-radius: 2px;
}

.event a,
.range a {
  color: inherit;
}

.event {
  left: 150px;
}

.range {
  left: 250px;
}
.range.political {
  left: 400px;
}

.nature {
  background-color: #91e5b4;
  color: black;
}

.archeological {
  background-color: #e5b391;
  color: black;
}

.political {
  background-color: #de91e5;
  color: black;
}

.person {
  background-color: rgb(0, 132, 255);
}
</style>
