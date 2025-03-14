<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const props = defineProps({
  range: Number,
  label: String,
});

const draggableEl = useTemplateRef('draggableEl');

const centerElement = () => {
  if (!draggableEl.value) return;
  
  // Get visible window dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Get scroll position
  const scrollY = window.scrollY;
  
  // Get element dimensions
  const elementWidth = draggableEl.value.offsetWidth;
  const elementHeight = draggableEl.value.offsetHeight;
  
  // Calculate center position including scroll offset
  const centerX = (windowWidth / 2) - (elementWidth / 2);
  const centerY = scrollY + (windowHeight / 2) - (elementHeight / 2);
  
  // Use GSAP to animate to center
  gsap.fromTo(draggableEl.value, {
    left: 0,
    top: 0,
    height: 0
  },{
    left: centerX,
    top: centerY,
    height: props.range,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      createDraggable();
    }
  });
};

const createDraggable = () => {
  Draggable.create(draggableEl.value, {
      type: "x,y",  // Allow dragging on both x and y axes
      bounds: '.timeline',
      onDragStart: function() {
        // Optional: add active class when dragging starts
        this.target.classList.add('active');
      },
      onDragEnd: function() {
        // Optional: remove active class when dragging ends
        this.target.classList.remove('active');
      }
    });
}

onMounted(() => {
  if (draggableEl.value) {
        centerElement();
  }
});
</script>

<template>
  <div class="compare-object" ref="draggableEl">
    <span>{{ props.label }}</span>
  </div>
</template>

<style scoped>
.compare-object {
  position: absolute;
  height: 300px;
  width: 100px;
  transform: translate(-50px, -150px);
  border: 2px solid rgb(81, 209, 248);
  background-color: rgba(81, 209, 248, 0.5);
  cursor: pointer;
}

.compare-object.active {
  border: 2px solid rgb(79, 197, 55);
  background-color: rgba(79, 197, 55, 0.5);
}

span {
  display: block;
  position: relative;
  transform: translateY(calc(-100% - 8px));
  user-select: none;
  font-size: 0.8em;
}
</style>