<script setup lang="ts">
import { yearToCalendarYear, calendarYearToYear } from "../common/convert-year";
import { events } from "../data/events";
import { people } from "../data/people";
import { states } from "../data/states";
import { Category, DataPoint, Kind } from "../types/DataPoint";

const totalYears = 12000;
const range = 500;
const numGridLines = totalYears / range;

const entryPosition = (calendarYear: string): string => {
  return `${calendarYearToYear(calendarYear, totalYears)}px`;
};

const entryStyle = (entry: DataPoint): Record<string, any> => {
  const top = entryPosition(entry.year);
  const height = entry.range ? `${entry.range}px` : "auto";

  // let startLeft = entry.kind === Kind.EVENT ? 120 : 300
  let startLeft = 120;
  const wiggle = Math.random() * 50 * (Math.random() < 0.5 ? 1 : -1);
  switch (entry.category) {
    case Category.ARCHEOLOGICAL:
      startLeft += 80;
      break;
    case Category.NATURE:
      startLeft += 5;
      break;
    case Category.PERSON:
      startLeft += 180;
      break;
    case Category.POLITICAL:
      startLeft += 340;
      break;
  }

  return {
    top,
    height,
    left: `${startLeft + wiggle}px`,
  };
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

<style lang="scss" scoped>
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
  user-select: none;
}

.event,
.range {
  position: absolute;
  padding: 4px 8px;
  border-top: 2px solid;

  &:hover,
  &:focus,
  &:active {
    z-index: 999;

    a {
      background: #151618c4;
    }
  }
}

.event a,
.range a {
  color: inherit;
  position: relative;
  display: block;
  transform: translateY(calc(-100% - 8px));
  text-decoration: none;
  font-size: 12px;
  user-select: none;
}

.event:before {
  content: "";
  display: block;
  position: absolute;
  top: -5px;
  left: -5px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}

.range {
  border-left: 2px solid;
}

.nature {
  border-color: #91e5b4;
}

.event.nature:before {
  background-color: #91e5b4;
}
.archeological {
  border-color: #e5b391;
}

.event.archeological:before {
  background-color: #e5b391;
}

.political {
  border-color: #de91e5;
}

.event.political::before {
  background-color: #de91e5;
}

.person {
  border-color: rgb(0, 132, 255);
}
</style>
