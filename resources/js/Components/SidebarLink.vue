<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    active: Boolean,
});
</script>

<template>
    <Link
        class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="/"
        :class="{
            'font-bold text-gray-200 bg-gray-500': active,
        }"
    >
        <slot />
    </Link>
</template>
