<template>
  <form :id="name | lower ">
    <input class="stat-num" type="number" v-model="value">
    <br/>{{ name }}<br/>
  </form>
</template>

<script>
export default {
  name: 'Stat',
  props: {
    name: String,
    value: Number
  },
  data () {
    this.value = this.value || 0
    return {
    }
  },
  filters: {
    lower (str) {
      return str.toLowerCase()
    }
  }
}
</script>

<style scoped>
form {
  color: #18F;
  font-size: 1.5em;
  font-family: fantasy;
  font-variant: small-caps;
}

.stat-num {
  width: 3em;
  height: 2em;
}
</style>
