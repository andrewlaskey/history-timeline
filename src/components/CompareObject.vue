<script setup lang="ts">
import { ref, computed } from "vue";
import { Draggable } from "@braks/revue-draggable";

const props = defineProps({
  range: Number,
  label: String,
});

const posX = ref(window.innerWidth / 2);
const posY = ref(document.documentElement.scrollTop + 200);
const isMoving = ref(false);
const calcStyle = computed((): Record<string, unknown> => {
  return {
    top: posY.value + "px",
    left: posX.value + "px",
    height: `${props.range || 80}px`,
  };
});

const move = (event: PointerEvent): void => {
  if (isMoving.value) {
    posX.value = posX.value + event.movementX;
    posY.value = posY.value + event.movementY;
  }
};

const touchMove = (event: TouchEvent): void => {
  if (isMoving.value) {
    const touch = event.targetTouches[0];
    posX.value = touch.pageX;
    posY.value = touch.pageY;
  }
};

const toggleActive = (active: boolean): void => {
  isMoving.value = active;
  document.body.classList.toggle("is-fixed", active);
};
</script>

<template>
  <Draggable
    ><div class="compare-object" :style="calcStyle">
      {{ props.label }}
    </div></Draggable
  >
</template>

<style scoped>
.compare-object {
  position: absolute;
  height: 300px;
  width: 100px;
  transform: translate(-50px, -150px);
  border: 2px solid rgb(81, 209, 248);
  background-color: rgb(81, 209, 248, 0.5);
  cursor: pointer;
}

.compare-object.active {
  border: 2px solid rgb(79, 197, 55);
  background-color: rgb(79, 197, 55, 0.5);
}

span {
  display: block;
  position: relative;
  transform: translateY(calc(-100% - 8px));
  user-select: none;
}
</style>
