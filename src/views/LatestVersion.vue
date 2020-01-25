<template>
    <div class="home">
        <api-ui
            username="tobytwigger"
            repository="swagger-pages"
            branch="master"></api-ui>
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
            return {
            }
        }
    }
</script>
