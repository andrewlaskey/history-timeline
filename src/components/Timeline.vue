<script setup lang="ts">
import { yearToCalendarYear, calendarYearToYear } from "../common/convert-year";
import { events } from "../data/events";
import { people } from "../data/people";
import { states } from "../data/states";
import { Category, DataPoint, Kind } from "../types/DataPoint";
import TimelineEntry from './TimelineEntry.vue'

const totalYears = 12000;
const range = 500;
const numGridLines = totalYears / range;

const entryPosition = (calendarYear: string): number => {
  return calendarYearToYear(calendarYear, totalYears);
};

const dataPoints = [...events, ...people, ...states];
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

    <TimelineEntry
      v-for="entry in dataPoints"
      :key="entry.label"
      :top="entryPosition(entry.year)"
      :range="entry.range"
      :kind="entry.kind"
      :category="entry.category"
      :link="entry.link"
      :label="entry.label"
    />
  </div>
</template>

<style lang="scss" scoped>
.timeline {
  position: relative;
  margin: 0 auto;
  height: 12000px;
  width: 100%;
  max-width: 600px;
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
  user-select: none;
}
</style>
