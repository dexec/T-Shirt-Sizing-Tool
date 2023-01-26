<template>
  <div class="d-flex">
    <v-simple-table v-for="selectedBuckedId in selected" :key="selected.indexOf(selectedBuckedId)" class="mr-4"
                    style="width: 30%">
      <tr>
        <th colspan="2">
          {{ buckets.find(bucket => bucket.id === selectedBuckedId).name }}
        </th>
      </tr>
      <tr v-for="ticket in tickets.filter(ticket => ticket.bucket===buckets.find(bucket => bucket.id === selectedBuckedId).name)"
          :key="ticket.id">
        <td>{{ ticket.id }}</td>
        <td>{{ ticket.thema }}</td>
      </tr>
    </v-simple-table>
    <div>
      <v-checkbox v-for="bucket in buckets" :key="bucket.id" v-model="selected" :value="bucket.id"
                :label=bucket.name>
    </v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "testView",
  data() {
    return {
      selected: [0, 1, 2, 3, 4],
      buckets: [{id: 0, name: 'XS'}, {id: 1, name: 'S'}, {id: 2, name: 'M'}, {id: 3, name: 'L'}, {id: 4, name: 'XL'}],
      tickets: [{id: 0, thema: 'UI erstellen', bucket: 'S'}, {id: 1, thema: 'Suchfunktion', bucket: 'XS'}, {
        id: 2,
        thema: 'Migration',
        bucket: 'M'
      }]
    }
  }
}
</script>

<style>

</style>