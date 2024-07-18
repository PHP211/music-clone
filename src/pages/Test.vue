<template>
    <div class='flex flex-row h-screen space-x-2'>
        <div class='basis-1/6'>
            <Nav></Nav>
        </div>
        <div class='bg-gray-500 basis-5/6'>Content</div>
    </div>
</template>

<script setup>
import Nav from '../components/Navigation.vue'
</script>