<template>
  <v-row>
    <v-col cols="3" class="d-flex flex-column ma-5">
      <h1>Projektinformationen</h1>
      <h3>Projektname</h3>
      <v-text-field outlined solo></v-text-field>
      <h3>Beschreibung</h3>
      <v-textarea outlined solo></v-textarea>
      <h1>Buckets</h1>
      <div v-for="bucket in buckets" :key="bucket.id">
        {{ bucket.name }}
      </div>
      <v-btn>Buckets bearbeiten</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ProjektkalkulationView",
  data() {
    return {
      buckets: [{ id:0, name: 'XS'}, {id: 1, name: 'S'}, {id:2, name: 'M'}]
    }
  }
}
</script>
