<template>
  <div style="height: 100%; width: 100%">
    <ag-grid-vue
        style="width: 100%; height: 100%"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData.filter(node => node.visible)"
        :defaultColDef="defaultColDef"
        :getRowId="getRowId"
        @grid-ready="onGridReady"></ag-grid-vue>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {AgGridVue} from "ag-grid-vue";
import TestComp from "@/components/TestComp.vue";

export default {
  name: "testView2",
  data() {
    return {
      getRowId: null,
      gridApi: null,
      columnApi: null,
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
          cellRenderer: 'TestComp',
          cellRendererParams: {
            items: this.rowData
          }
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
        {
          field: 'visible',
          headerName: 'visible'
        }
      ]
    }
  },
  setup() {
    const rowData = [
      {
        id: '0',
        ticket_nr: '123',
        thema: 'UI erstellen',
        beschreibung: 'Es soll eine UI erstellt werden',
        komponente: 'A',
        bucket: 'S',
        schaetzung: '321',
        parent_id: '-1',
        child_ids: ['2'],
        visible: true,
        collapsed: true
      },
      {
        id: '1',
        ticket_nr: '123',
        thema: 'UI erstellen',
        beschreibung: 'Es soll eine UI erstellt werden',
        komponente: 'A',
        bucket: 'S',
        schaetzung: '321',
        parent_id: '-1',
        child_ids: ['4', '5'],
        visible: true,
        collapsed: true
      },
      {
        id: '2',
        ticket_nr: '123',
        thema: 'UI erstellen',
        beschreibung: 'Es soll eine UI erstellt werden',
        komponente: 'A',
        bucket: 'S',
        schaetzung: '321',
        parent_id: '0',
        child_ids: ['3'],
        visible: false,
        collapsed: true
      },
      {
        id: '3',
        ticket_nr: '123',
        thema: 'UI erstellen',
        beschreibung: 'Es soll eine UI erstellt werden',
        komponente: 'A',
        bucket: 'S',
        schaetzung: '321',
        parent_id: '2',
        child_ids: [],
        visible: false,
        collapsed: true
      },
      {
        id: '4',
        ticket_nr: '123',
        thema: 'UI erstellen',
        beschreibung: 'Es soll eine UI erstellt werden',
        komponente: 'A',
        bucket: 'S',
        schaetzung: '321',
        parent_id: '1',
        child_ids: [],
        visible: false,
        collapsed: true
      },
      {
        id: '5',
        ticket_nr: '123',
        thema: 'UI erstellen',
        beschreibung: 'Es soll eine UI erstellt werden',
        komponente: 'A',
        bucket: 'S',
        schaetzung: '321',
        parent_id: '1',
        child_ids: [],
        visible: false,
        collapsed: true
      }]
    return {
      rowData
    }
  },
  created() {
    this.getRowId = (params) => params.data.id
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