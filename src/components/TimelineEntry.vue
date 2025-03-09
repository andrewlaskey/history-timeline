<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Category } from '../types/DataPoint';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    top: Number,
    range: Number,
    label: String,
    category: String,
    kind: String,
    link: String
});

const entry = useTemplateRef('entry');

onMounted(() => {
    if (!entry.value) return;

    let startLeft = 120;
    const wiggle = Math.random() * 50 * (Math.random() < 0.5 ? 1 : -1);
    switch (props.category) {
        case Category.ARCHEOLOGICAL:
        startLeft += 30;
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

    gsap.set(entry.value, {
        top: props.top,
        left: startLeft + wiggle,
        height: props.range ? 0 : undefined,
        opacity: 0
    });

    gsap.to(entry.value, {
        scrollTrigger: entry.value,
        opacity: 1,
        height: props.range ? props.range : undefined,
        delay: 0.3,
        duration: 0.5,
        ease: 'power1.in'
    });
})
</script>

<template>
    <div :class="[kind, category]" ref="entry">
        <a :href="link" target="_blank">{{ label }}</a>
    </div>
</template>

<style lang="scss" scoped>
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