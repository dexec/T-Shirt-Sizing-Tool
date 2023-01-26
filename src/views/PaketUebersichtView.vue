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
      <div v-on:keyup.up="alert('hallo');">
        <v-data-table id="virtual-scroll-table" height="500" item-key="id" :headers="headers" :items="items"
                      :search="search" disable-pagination
                      hide-default-footer @click:row="selectRow" @dblclick:row="editItem" single-select fixed-header>
          <template v-slot:[`item.thema`]="{ item }">
            <!--          TODO highlight on dbclick-->
            <v-text-field v-model="editedItem.thema" :hide-details="true" :autofocus="true" dense single-line
                          v-if="item.id === editedItem.id" @keydown.enter="save"></v-text-field>
            <span v-else>{{ item.thema }}</span>
          </template>
          <template v-slot:[`item.beschreibung`]="{ item }">
            <v-text-field v-model="editedItem.beschreibung" :hide-details="true" dense single-line
                          v-if="item.id === editedItem.id" @keydown.enter="save"></v-text-field>
            <span v-else>{{ item.beschreibung }}</span>
          </template>
          <template v-slot:[`item.ticket_nr`]="{ item }">
            <v-text-field v-model="editedItem.ticket_nr" :hide-details="true" dense single-line
                          v-if="item.id === editedItem.id" @keydown.enter="save"></v-text-field>
            <span v-else>{{ item.ticket_nr }}</span>
          </template>
          <template v-slot:[`item.komponente`]="{ item }">
            <v-text-field v-model="editedItem.komponente" :hide-details="true" dense single-line
                          v-if="item.id === editedItem.id" @keydown.enter="save"></v-text-field>
            <span v-else>{{ item.komponente }}</span>
          </template>
          <template v-slot:[`item.schaetzung`]="{ item }">
            <v-text-field v-model="editedItem.schaetzung" :hide-details="true" dense single-line
                          v-if="item.id === editedItem.id" @keydown.enter="save"></v-text-field>
            <span v-else>{{ item.schaetzung }}</span>
          </template>
          <!--        <template v-slot:item = "{ item }">
                    <div>{{ item.id }}</div>

                  </template>-->
        </v-data-table>
      </div>
    </v-card>
    <v-card class="d-flex justify-center fixed">
      <v-btn class="mx-5" @click="addNew">Neues Arbeitspaket anlegen</v-btn>
      <v-btn class="mx-5" @click="removeItem">Arbeitspaket löschen</v-btn>
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
      selectedRow: -1,
      editedIndex: -1,
      search: '',
      headers: [
        {
          text: 'ID',
          value: 'id',
          width: '6%'
        },
        {
          text: 'Thema',
          value: 'thema',
          width: '25%'
        },
        {
          text: 'Beschreibung',
          value: 'beschreibung',
          width: '25%'
        },
        {
          text: 'Ticket-NR',
          value: 'ticket_nr',
          width: '11%'
        },
        {
          text: 'Komponente',
          value: 'komponente',
          width: '11%'
        },
        {
          text: 'Bucket',
          value: 'bucket',
          width: '11%'
        },
        {
          text: 'Schätzung',
          value: 'schaetzung',
          width: "11%"
        },
      ],
      editedItem: {
        id: -1,
        thema: '',
        beschreibung: '',
        ticket_nr: '',
        komponente: '',
        bucket: '',
        schaetzung: ''
      },
      defaultItem: {
        id: -1,
        thema: '',
        beschreibung: '',
        ticket_nr: '',
        komponente: '',
        bucket: '',
        schaetzung: ''
      },
      items: items
    }
  },
  methods: {
    goUp() {
      alert("asdf");
      /*this.selectedRow++;
      row.select();*/
    },
    selectRow(item, row) {
      this.selectedRow = item.id
      row.select();
      if (this.selectedRow !== this.editedIndex) this.close()
    },
    editItem(event, {item}) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      /*      alert(event.target.parentElement);*/
    },
    close() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      }
      this.close()
    },
    addNew() {
      const addObj = Object.assign({}, this.defaultItem);
      addObj.id = this.items.length;
      this.items.push(addObj);
      this.selectedRow = this.editedIndex = this.items.indexOf(addObj);
      this.editedItem = Object.assign({}, addObj);
    },
    removeItem() {
      this.items.splice(this.selectedRow, 1)
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].id = i
      }
    }
  },

}
</script>

<style>
#virtual-scroll-table {
  /*max-height: 400px; !*TODO relative Angabe besser??*!*/
  overflow: auto;
}

.v-data-table__selected {
  background-color: cyan !important
}
</style>
