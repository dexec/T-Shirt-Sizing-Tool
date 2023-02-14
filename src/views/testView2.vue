<template>
  <div style="height: 100%; width: 100%">
    <ag-grid-vue
        style="width: 100%; height: 100%"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :defaultColDef="defaultColDef"
        @grid-ready="onGridReady"></ag-grid-vue>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {AgGridVue} from "ag-grid-vue";
import TestComp from "@/components/TestComp.vue";

const items = []
for (let i = 0; i < 30; i++) {
  items.push({
    ticket_nr: '123',
    thema: 'UI erstellen',
    beschreibung: 'Es soll eine UI erstellt werden',
    komponente: 'A',
    bucket: 'S',
    schaetzung: '321',
  })
}
export default {
  name: "testView2",
  data() {
    return {
      defaultColDef: {
        sortable: true,
        filter: true,
        editable: true
      },
      columnDefs: [
        {
          field: 'ticket_nr',
          headerName: 'Ticket-NR',
          minWidth: 5,
          cellRenderer: 'TestComp'
        },
        {
          field: 'thema',
          headerName: 'Thema',
        },
        {
          field: 'beschreibung',
          headerName: 'Beschreibung',
        },
        {
          field: 'komponente',
          headerName: 'Komponente',
        },
        {
          field: 'bucket',
          headerName: 'Bucket',
          editable: false
        },
        {
          field: 'schaetzung',
          headerName: 'Schätzung',
        },
      ],
      rowData: items,
      gridApi: null,
      columnApi: null,
    }
  },
  components: {
    AgGridVue,
    // eslint-disable-next-line vue/no-unused-components
    TestComp
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    }
  },
}
</script>

<style scoped>

</style>