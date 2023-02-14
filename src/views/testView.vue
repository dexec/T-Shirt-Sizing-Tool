<template>
  <div style="height: 100%">
    <ag-grid-vue
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        @grid-ready="onGridReady"
        @cell-double-clicked="onCellDoubleClicked"
        @cell-key-down="onCellKeyDown"
        :autoGroupColumnDef="autoGroupColumnDef"
        :defaultColDef="defaultColDef"
        :groupDefaultExpanded="groupDefaultExpanded"
        :animateRows="true"
        :rowData="rowData"></ag-grid-vue>
  </div>
  <!--  <ag-grid-vue
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        @grid-ready="onGridReady"
        :defaultColDef="defaultColDef"
        :rowSelection="rowSelection"
        :rowData="rowData"></ag-grid-vue>-->

</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {AgGridVue} from "ag-grid-vue";
import CustomGroupCellRenderer from "@/components/CustomGroupCellRenderer.vue";

export default {
  name: "testView",
  data() {
    return {
      columnDefs: [
        {field: 'country', rowGroup: true, hide: true},
        {field: 'year', rowGroup: true, hide: true},
        {field: 'athlete'},
        {field: 'total', aggFunc: 'sum'},
      ],
      gridApi: null,
      columnApi: null,
      defaultColDef: {
        flex: 1,
        minWidth: 120,
        resizable: true,
      },
      autoGroupColumnDef: null,
      groupDefaultExpanded: null,
      rowData: null,
    };
  },
  components: {
    'ag-grid-vue': AgGridVue,
    // eslint-disable-next-line vue/no-unused-components
    CustomGroupCellRenderer,
  },
  created() {
    this.autoGroupColumnDef = {
      cellRenderer: 'CustomGroupCellRenderer',
    };
    this.groupDefaultExpanded = 1;
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

      const updateData = (data) => params.api.setRowData(data);

      fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
          .then((resp) => resp.json())
          .then((data) => updateData(data));
    },
    onCellDoubleClicked: (params) => {
      if (params.colDef.showRowGroup) {
        params.node.setExpanded(!params.node.expanded);
      }
    },
    onCellKeyDown: (params) => {
      if (!('colDef' in params)) {
        return;
      }
      if (!(params.event instanceof KeyboardEvent)) {
        return;
      }
      if (params.event.code !== 'Enter') {
        return;
      }
      if (params.colDef.showRowGroup) {
        params.node.setExpanded(!params.node.expanded);
      }
    },
  },
};
/*export default {
  name: "testView",
  data() {
    return {
      visible: false,
      newBucketName: '',
      alleBucketsBerarbeitenModus: false,
      currentSelectedBucket: '',
      currentEditBucket: '',
      buckets: [{id: 0, name: 'XS'}, {id: 1, name: 'S'}, {id: 2, name: 'M'}, {id: 3, name: 'L'}, {id: 4, name: 'XL'}],
      tickets: [{id: 0, thema: 'UI erstellen', bucket: 'S'}, {id: 1, thema: 'Suchfunktion', bucket: 'XS'}, {
        id: 2,
        thema: 'Migration',
        bucket: 'M'
      }],
    }
  },
  methods: {
    editBucket() {
      if (this.newBucketName !== '') this.buckets[this.buckets.map(bucket => bucket.name).indexOf(this.currentEditBucket)].name = this.newBucketName
      this.newBucketName = ''
      this.currentSelectedBucket = ''
      this.currentEditBucket = ''
    },
    loeschenBucket() {
      this.buckets.splice(this.buckets.map(bucket => bucket.name).indexOf(this.currentSelectedBucket), 1)
      this.currentSelectedBucket = ''
      for (let i = 0; i < this.buckets.length; i++) {
        this.buckets[i].id = i
      }
    },
    speichernBuckets() {
      this.clearData()
      this.$store.commit('updateAllBuckets', this.buckets)
    },
    abbrechen() {
      this.clearData()
      for (let i = 0; i < this.buckets.length; i++) {
        this.buckets[i] = JSON.parse(JSON.stringify(this.buckets[i]))
      }
    },
    clearData() {
      this.alleBucketsBerarbeitenModus = false
      this.newBucketName = ''
      this.currentSelectedBucket = ''
      this.currentEditBucket = ''
    }
  },
  computed: {
    file() {
      return this.$store.state.file
    }
  }
}*/
</script>

<style>
.bucket {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
}

.invisible {
  visibility: hidden;
}
</style>