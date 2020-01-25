<template>
    <div>
        <div ref="api-container"></div>
    </div>
</template>

<script>
    import SwaggerUI, {presets} from 'swagger-ui';
    import 'swagger-ui/dist/swagger-ui.css';

    export default {
        name: 'ApiUI',
        props: {
            username: {
                required: true,
                type: String
            },
            repository: {
                required: true,
                type: String
            },
            branch: {
                required: true,
                type: String
            }
        },
        data() {
            return {
            }
        },
        mounted() {
            SwaggerUI({
                domNode: this.$refs['api-container'],
                url: this.swaggerUrl,
                presets: [presets.apis],
            });
        },
        computed: {
            swaggerUrl() {
                return 'https://github.com/'
                    + this.username + '/'
                    + this.repository
                    + '/blob/'
                    + this.branch
                    + '/swagger.json';
            }
        }
    }
</script>

<style scoped>

</style>
