import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {

  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);       // you can access this data anywhere in the app as long as you import it in that file.
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

