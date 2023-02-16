<template>
  <div v-if="Array.isArray(this.params.data.child_ids)&&this.params.data.child_ids.length">
    <v-btn @click="changeOpenState">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    {{ this.params.data.id }}
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: '',
      params: null,
      items: null
    }
  },
  name: "TestComp",
  beforeMount() {
    this.value = this.params.value

  },
  methods: {
    changeOpenState() {
      for (let child_id of this.params.node.data.child_ids) {
        this.params.items.find(node => node.id === child_id).visible = true
      }
      const updated = this.params.node.data;
      this.params.node.updateData(updated)
    }
  }
}
</script>

<style scoped>

</style>