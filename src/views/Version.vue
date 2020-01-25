<template>
    <div class="home">
        <api-ui
            :username="username"
            :repository="repository"
            :branch="branch"></api-ui>
    </div>
</template>

<script>
    import ApiUi from "../components/ApiUi";

    export default {
        name: 'LatestVersion',
        components: {
            ApiUi
        },

        computed: {
            username() {
                return process.env.VUE_APP_GITHUB_USERNAME;
            },
            repository() {
                return process.env.VUE_APP_GITHUB_REPOSITORY;
            },
            branch() {
                return this.$route.params.version;
            }
        }
    }
</script>