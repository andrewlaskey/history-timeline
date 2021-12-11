<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  range: Number,
  label: String,
})

const posX = ref(window.innerWidth / 2)
const posY = ref(document.documentElement.scrollTop + 200)
const isMoving = ref(false)
const calcStyle = computed((): Record<string, unknown> => {
  return {
    top: posY.value + 'px',
    left: posX.value + 'px',
    height: `${props.range || 80}px`,
  }
})

const move = (event: PointerEvent): void => {
  if (isMoving.value) {
    posX.value = posX.value + event.movementX
    posY.value = posY.value + event.movementY
  }
}
</script>

<template>
  <div
    @pointerdown="isMoving = true"
    @pointerup="isMoving = false"
    @pointerleave="isMoving = false"
    @pointermove="move"
    :style="calcStyle"
    class="compare-object"
    :class="{ active: isMoving }"
  >
    {{ props.label }}
  </div>
</template>

<style scoped>
.compare-object {
  position: absolute;
  height: 300px;
  width: 100px;
  transform: translate(-50px, -150px);
  background: rgb(81, 209, 248);
  cursor: pointer;
}

.compare-object.active {
  background: green;
}
</style>
