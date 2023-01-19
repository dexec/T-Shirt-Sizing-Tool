<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-btn>Alle aktivieren</v-btn>
        <v-checkbox v-for="bucket in buckets" :key="bucket.id" v-model="selected" :value="bucket.id"
                    :label=bucket.name @change="sortSelectedBuckets">
        </v-checkbox>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <v-btn
            class="ma-2"
            color="primary"
            dark
        >
          Accept
          <v-icon
              dark
              right
          >
            mdi-checkbox-marked-circle
          </v-icon>
        </v-btn>
        <v-simple-table style="width: 30%;">
          <tr>
            <th>ID</th>
            <th>Thema</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Thema 1</td>
          </tr>
        </v-simple-table>
        <v-btn
            class="ma-2"
            color="primary"
            dark
        >
          Accept
          <v-icon
              dark
              right
          >
            mdi-checkbox-marked-circle
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-simple-table v-for="selectedBuckedId in selected" :key="selectedBuckedId.id" class="mr-4" style="width: 30%">
          <tr>
            <th colspan="2">
              {{ buckets.find(bucket => bucket.id === selectedBuckedId).name }}
            </th>
          </tr>
          <tr v-for="ticket in tickets.filter(ticket => ticket.bucket===buckets.find(bucket => bucket.id === selectedBuckedId).name)" :key="ticket.id">
            <td>{{ticket.id}}</td>
            <td>{{ticket.thema}}</td>
          </tr>
        </v-simple-table>
      </v-col>
      <v-col cols="2">
        <v-simple-table>
          <tr>
            <th>ID</th>
            <th>Thema</th>
          </tr>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ticket.id}}</td>
            <td>{{ticket.thema}}</td>
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
      checked: true,
      selected: [],
      buckets: [{id: 0, name: 'XS'}, {id: 1, name: 'S'}, {id: 2, name: 'M'}, {id: 3, name: 'L'}, {id: 4, name: 'XL'}],
      tickets: [{id: 0, thema: 'UI erstellen', bucket:'S'}, {id: 1, thema: 'Suchfunktion', bucket:'XS'}, {id: 2, thema: 'Migration', bucket:'M'}]
    }
  },
  methods: {
    sortSelectedBuckets() {
      this.selected.sort(function (a, b) {
        return a - b
      })
    }
  }
}
</script>

<style>

</style>