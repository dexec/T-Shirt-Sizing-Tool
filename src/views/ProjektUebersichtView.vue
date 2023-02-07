<template>
    <div class="d-flex flex-column" style="width: 50%">
      <h1>Projektinformationen</h1>
      <h3>Projektname</h3>
      <v-text-field outlined solo></v-text-field>
      <h3>Beschreibung</h3>
      <v-textarea outlined solo></v-textarea>
      <h1>Buckets</h1>
      <div v-if="!alleBucketsBerarbeitenModus">
        <div class="d-flex flex-wrap">
          <div v-for="bucket in buckets" :key="bucket.id">
            <v-card class="ma-5 bucket">{{ bucket.name }}</v-card>
          </div>
        </div>
        <v-btn @click="() => this.alleBucketsBerarbeitenModus=true">Buckets bearbeiten</v-btn>
      </div>
      <div v-else>
        <div class="d-flex flex-wrap align-center mb-5">
          <div v-for="bucket in copyBuckets" :key="bucket.id">
            <v-btn>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-hover v-if="currentEditBucket===bucket.name" v-slot="{hover}">
              <v-card :class="{'on-hover':hover}" class="ma-5 bucket">
                <v-text-field v-model=newBucketName @blur="editBucket"
                              @click="currentEditBucket=currentSelectedBucket=bucket.name" autofocus></v-text-field>
              </v-card>
            </v-hover>
            <v-hover v-else v-slot="{hover}">
              <v-card :class="{'on-hover':hover}" class="ma-5 bucket" :elevation="hover ? 12:2"
                      :color="bucket.name===currentSelectedBucket ? 'blue':'undefined'"
                      @click="currentSelectedBucket=bucket.name" @dblclick="currentEditBucket=bucket.name">
                {{ bucket.name }}
              </v-card>
            </v-hover>
          </div>
          <v-btn>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        <v-btn class="mr-5" @click="speichernBuckets">Fertig</v-btn>
        <v-btn class="mr-5" :disabled="this.currentSelectedBucket===''" @click="loeschenBucket">Bucket löschen</v-btn>
        <v-btn @click="abbrechen">Abbrechen</v-btn>
      </div>
    </div>
</template>
<style>
.bucket {
  border: 1px solid black !important;
  width: 50px !important;
  height: 50px !important;
  display: inline-block !important;
  text-align: center !important;
  vertical-align: middle !important;
  line-height: 50px !important;
}
</style>
<script>

export default {
  name: "ProjektkalkulationView",
  data() {
    return {
      newBucketName: '',
      alleBucketsBerarbeitenModus: false,
      currentSelectedBucket: '',
      currentEditBucket: '',
    }
  },
  methods: {
    editBuckets() {
      this.alleBucketsBerarbeitenModus = true
      this.buckets = [{id: 0, name: 'XXXS'}, {id: 1, name: 'Sab'}, {id: 2, name: 'aaM'}, {id: 3, name: 'LWE'}, {
        id: 4,
        name: 'XdddL'
      }]
      this.$store.commit('updateAllBuckets', this.buckets)
    },
    editBucket() {
      if (this.newBucketName !== '') this.copyBuckets[this.copyBuckets.map(bucket => bucket.name).indexOf(this.currentEditBucket)].name = this.newBucketName
      this.newBucketName = ''
      this.currentSelectedBucket = ''
      this.currentEditBucket = ''
    },
    loeschenBucket() {
      this.copyBuckets.splice(this.copyBuckets.map(bucket => bucket.name).indexOf(this.currentSelectedBucket), 1)
      this.currentSelectedBucket = ''
      for (let i = 0; i < this.copyBuckets.length; i++) {
        this.copyBuckets[i].id = i
      }
    },
    speichernBuckets() {
      this.clearData()
      this.$store.commit('updateAllBuckets', this.copyBuckets)
    },
    abbrechen() {
      this.clearData()
      for (let i = 0; i < this.buckets.length; i++) {
        this.copyBuckets[i] = JSON.parse(JSON.stringify(this.buckets[i]))
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
    copyBuckets() {
      return JSON.parse(JSON.stringify(this.buckets))
    },
    buckets() {
      return this.$store.state.buckets
    }
  }
}
</script>
