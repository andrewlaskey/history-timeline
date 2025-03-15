<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    title: string
}>();

const isOpen = ref<boolean>(true);
</script>

<template>
    <div class="drawer" :class="{ open: isOpen }">
        <div class="drawer-header">
            <button @click="isOpen = !isOpen">
                <svg class="icon icon-arrow_forward_ios"><use xlink:href="#icon-arrow_forward_ios"></use></svg>
                <span class="visually-hidden">Toggle Drawer</span>
            </button>
            <h3 class="drawer-title">{{ title }}</h3>
        </div>
        <div class="drawer-body">
            <div class="drawer-body-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.drawer {
    display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #151618;
  border: 1px solid;
  border-color: #dde5ee;
}

.drawer-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
        border: none;
        outline: none;
        color: #dde5ee;
        background: none;
        
        .icon {
            transition: transform 0.25s ease;
        }
    }
}

.open {
    button .icon {
        transform: rotate(90deg);
    }
}

.drawer-title {
    flex-grow: 1;
    margin-top: 0;
    margin-bottom: 0;
}

.drawer-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-out;
}

.open .drawer-body {
    grid-template-rows: 1fr;
    padding-top: 1rem;
}

.drawer-body .drawer-body-content {
    overflow: hidden;
}
</style>