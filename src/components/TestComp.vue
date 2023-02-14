<template>
  <div>
    <v-btn @click="alertClick(value)">click</v-btn>
    {{this.params.value}}
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: '',
      params: null
    }
  },
  name: "TestComp",
  beforeMount() {
    this.value = this.params.value

  },
  methods: {
    alertClick(v) {
      console.log(v)
    }
  }
}
</script>

<style scoped>

</style>