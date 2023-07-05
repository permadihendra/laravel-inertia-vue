<template>
    <nav class="mt-6">
        <ul class="list-disc">
            <li>
                <Link
                    href="/"
                    :class="{ active: $page.component === 'Home' }"
                    class="text-blue-500 hover:underline"
                    >Home</Link
                >
            </li>
            <li>
                <Link
                    href="/users"
                    :class="{ active: $page.component === 'Users' }"
                    >Users</Link
                >
            </li>
            <li>
                <Link
                    href="/settings"
                    :class="{ active: $page.component === 'Settings' }"
                    >Settings</Link
                >
            </li>
            <li></li>
        </ul>
    </nav>
</template>

<script>
import { Link } from "@inertiajs/vue3";
export default {
    components: { Link },
};
</script>
