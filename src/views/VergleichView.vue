<template>
<v-container>
  <v-row>
    <v-col cols="1">
      <v-btn class="text-truncate">Alle aktivieren</v-btn>
    <v-checkbox v-for="bucket in buckets" :key="bucket.id" v-model="selected" :value=bucket.name
      :label=bucket.name>
    </v-checkbox>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
    <v-simple-table>
      <tr>
        <th v-for="selectedBucket in selected" :key="selectedBucket.id">
          {{selectedBucket}}
        </th>
      </tr>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
      </tr>
    </v-simple-table>
    </v-col>
    <v-col cols="2">
      <v-simple-table>
        <tr>
        <th>ID</th>
        <th>Thema</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Thema 1</td>
        </tr>
      </v-simple-table>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "VergleichView",
  data() {
    return {
      selected: [],
      buckets: [{ id:0, name: 'XS'}, {id: 1, name: 'S'}, {id:2, name: 'M'}]
    }
  }
}
</script>

<style scoped>

</style>