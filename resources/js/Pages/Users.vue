<template>
    <h1 class="text-4xl font-bold">Users</h1>
    <Nav></Nav>

    <p style="margin-top: 400px">This current time is: {{ time }}</p>
    <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
</template>

<script>
import Nav from "../Shared/Nav.vue";
import { Link } from "@inertiajs/vue3";

export default {
    components: { Nav, Link },
    props: {
        time: String,
    },
};
</script>
