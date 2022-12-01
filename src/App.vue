<script setup lang="ts">
import WidgetEdition from './components/WidgetEdition.vue';
</script>

<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item"><a href="#">Data</a></li>
        <li class="breadcrumb-item active" aria-current="page">Bootstrap</li>
      </ol>
    </nav>
    <WidgetEdition name="John" />
    <br />
    <WidgetEdition name="Jack" />
  </div>
</template>

<style scoped>

</style>
