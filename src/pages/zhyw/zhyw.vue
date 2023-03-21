<template>
    <div class="pageBox">
        <leftBar />
		<rightBar />
		<content />
		<contentTop />
		<contentBot />
    </div>
</template>

<script lang="ts" setup>
import leftBar from './components/leftBar.vue'
import rightBar from './components/rightBar.vue'
import content from './components/content.vue'
import contentTop from './components/contentTop.vue'
import contentBot from './components/contentBot.vue'

</script>

<style lang="scss" scoped>

</style>