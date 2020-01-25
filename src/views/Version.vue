<template>
    <div class="home">
        <api-ui
            username="tobytwigger"
            repository="swagger-pages"
            :branch="$route.params.version"></api-ui>
    </div>
</template>

<script>
    import ApiUi from "../components/ApiUi";

    export default {
        name: 'LatestVersion',
        components: {
            ApiUi
        },

        data() {
            return {}
        }
    }
</script>
