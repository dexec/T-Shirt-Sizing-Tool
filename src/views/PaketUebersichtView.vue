<template>
  <div>
    <v-card>
      <v-card-title>
        Arbeitspakete
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table v-if="showTable" id="virtual-scroll-table" item-key="id" :headers="headers" :items="items"
                    :search="search" disable-pagination
                    hide-default-footer @click:row="selectRow" single-select>
        <template v-slot:[`item.thema`]="props">
          <v-edit-dialog :return-value.sync="props.item.thema">
            {{ props.item.thema }}
            <template v-slot:input>
              <v-text-field
                  v-model="props.item.thema"
                  label="Edit"
                  single-line
                  counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
      </v-data-table>
    </v-card>
    <v-card class="d-flex justify-center fixed">
      <v-btn class="mx-5">Neues Arbeitspaket anlegen</v-btn>
      <v-btn class="mx-5">Arbeitspaket löschen</v-btn>
      <v-btn class="mx-5">Bucket zuweisen</v-btn>
    </v-card>
  </div>
</template>

<script>
const items = []
for (let i = 0; i < 30; i++) {
  items.push({
    id: i,
    thema: 'UI erstellen',
    beschreibung: 'Es soll eine UI erstellt werden',
    ticket_nr: '123',
    komponente: 'A',
    bucket: 'S',
    schaetzung: '321',
  })
}
export default {
  name: "PaketUebersichtView",
  data() {
    return {
      selectedItem: -1,
      showTable: true,
      search: '',
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Thema',
          value: 'thema'
        },
        {
          text: 'Beschreibung',
          value: 'beschreibung'
        },
        {
          text: 'Ticket-NR',
          value: 'ticket_nr'
        },
        {
          text: 'Komponente',
          value: 'komponente'
        },
        {
          text: 'Bucket',
          value: 'bucket'
        },
        {
          text: 'Schätzung',
          value: 'schaetzung'
        },
      ],
      items: items
    }
  },
  methods: {
    selectRow(item, row) {
      this.selectedItem = item.id
      row.select()
    },
    close() {
      console.log('Dialog closed')
    },
  }
}
</script>

<style>
#virtual-scroll-table {
  max-height: 400px; /*TODO relative Angabe besser??*/
  overflow: auto;
}

.v-data-table__selected {
  background-color: cyan !important
}
</style>
