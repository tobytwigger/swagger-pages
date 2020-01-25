<template>
    <div>
        <div ref="api-container"></div>
    </div>
</template>

<script>
    import SwaggerUI, {presets, plugins} from 'swagger-ui';
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
        watch: {
            username() {
                this.updateSwagger();
            },
            repository() {
                this.updateSwagger();
            },
            branch() {
                this.updateSwagger();
            }
        },
        mounted() {
            this.updateSwagger();
        },
        methods: {
            updateSwagger() {
                SwaggerUI({
                    domNode: this.$refs['api-container'],
                    url: this.swaggerUrl,
                    deepLinking: true,
                    presets: [presets.apis],
                    plugins: [
                        plugins.Topbar,
                    ]
                });
            }
        },
        computed: {
            swaggerUrl() {
                return 'https://raw.githubusercontent.com/'
                    + this.username + '/'
                    + this.repository + '/'
                    + this.branch
                    + '/swagger.json';
            }
        }
    }
</script>

<style scoped>

</style>
