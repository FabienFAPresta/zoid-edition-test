<template>
    <div class="widget-edition">
        <h1>This is an Edition widget</h1>
        <p>Look what's inside {{ props.name }}!</p>
        <p>{{ count }} <button type="button" class="btn btn-primary" @click="count++">➕</button></p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1);
const props = defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.widget-edition {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>