<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" key="home">Home</router-link>
            <span v-for="version in versions" :key="version">
                | <router-link :to="'/' + version">{{version}}</router-link>
            </span>
        </div>
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                versions: []
            }
        },

        created() {
            this.loadVersions();
        },

        methods: {
            loadVersions() {
                axios.get( 'https://api.github.com/repos/' + process.env.VUE_APP_GITHUB_USERNAME + '/' + process.env.VUE_APP_GITHUB_REPOSITORY + '/branches')
                    .then(response => this.versions = response.data.map(branch => branch.name))
                    .catch(error => alert('Could not load versions: ' + error.message));
            }
        }
    }
</script>