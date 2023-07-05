<script setup>
import Layout from "../Layout.vue";
import { Head } from "@inertiajs/vue3";
import ButtonCounter from "../Shared/ButtonCounter.vue";

defineProps({ user: Object });
</script>

<template>
    <Layout>
        <Head title="Welcome" />
        <h1>Welcome</h1>
        <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>
        <h1>Here is a child component!</h1>
        <ButtonCounter />
    </Layout>
</template>
