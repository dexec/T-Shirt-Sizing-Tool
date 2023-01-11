<template>
  <v-app>
    <v-main>
      <AppBar></AppBar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>
<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: 'App',
  components: {AppBar}
};
</script>