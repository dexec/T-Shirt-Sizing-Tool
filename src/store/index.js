import Vue from 'vue'
import Vuex from 'vuex'
import saveFile from './file.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        buckets: saveFile.buckets,
        packete: saveFile.packete,
        testBuckets: [
            {
                id: 0,
                name: 'XXL'
            },
            {
                id: 1,
                name: 'abc'
            }
        ]
    },
    getters: {},
    mutations: {
        updateAllBuckets(state, newBucketArray) {
            state.buckets = newBucketArray
            /*for (let oldBucket in state.buckets) {
                if (oldBucket.id === bucket.id) {
                    state.buckets[state.buckets.indexOf(oldBucket)] = bucket
                }
            }*/
        },
        updateTestBucket(state, name) {
            state.testBuckets[0].name = name
        }
    },
    actions: {},
    modules: {}
})