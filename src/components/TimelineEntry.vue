<script setup lang="ts">
import { computed, onBeforeUpdate, onMounted, onUpdated, useTemplateRef, watch } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Category, Kind } from '../types/DataPoint';
import { calendarYearToYear } from '../common/convert-year';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  year: string,
  range?: number,
  label: string,
  category: string,
  kind: string,
  link?: string,
  scale: number,
  totalYears: number
}>();

const entry = useTemplateRef('entry');

const rangeHeight = computed(() => {
  if (props.range) {
    return Math.floor(props.range * (1 / props.scale));
  }

  return undefined;
});

const top = computed(() => {
  return Math.floor(calendarYearToYear(props.year, props.totalYears) * (1 / props.scale));
});

const left = () => {
  let startLeft = 9;
    const wiggle = Math.random() * 10 * (Math.random() < 0.5 ? 1 : -1);
    switch (props.category) {
        case Category.ARCHEOLOGICAL:
        startLeft += 18;
        break;
        case Category.NATURE:
        startLeft += 9;
        break;
        case Category.PERSON:
        startLeft += 35;
        break;
        case Category.POLITICAL:
        startLeft += 60;
        break;
    }

  return `${startLeft + wiggle}%`;
};

const show = computed(() => {
  const timelineYear = calendarYearToYear(props.year, props.totalYears);

  const isWithinTimelineRange = timelineYear > 0;

  if (isWithinTimelineRange) {
    return props.scale === 1 || props.kind == Kind.RANGE;
  }

  return false;
});

onMounted(() => {
    if (!entry.value) return;

    gsap.set(entry.value, {
        top: top.value,
        left: left(),
        height: rangeHeight.value,
        autoAlpha: 0
    });

    if (show.value) {
      gsap.to(entry.value, {
          scrollTrigger: entry.value,
          autoAlpha: 1,
          height: rangeHeight.value,
          duration: 0.5,
          ease: 'power1.in'
      });
    }
});

onBeforeUpdate(() => {
  gsap.killTweensOf(entry.value);
});

onUpdated(() => {
  if (show.value) {
    gsap.to(entry.value, {
          top: top.value,
          left: left(),
          height: rangeHeight.value,
          autoAlpha: 1
      });
  } else {
    gsap.to(entry.value, { autoAlpha: 0 })
  }
});
</script>

<template>
    <div class="timeline-entry" :class="[kind, category]" ref="entry">
        <a :href="link" target="_blank">{{ label }}</a>
    </div>
</template>

<style lang="scss" scoped>
.timeline-entry {
  &:hover {
    z-index: 10;
  }
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