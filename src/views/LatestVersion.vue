<template>
    <div class="home">
        <api-ui
            username="bristol-su"
            repository="control-api-docs"
            branch="latest"></api-ui>
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
