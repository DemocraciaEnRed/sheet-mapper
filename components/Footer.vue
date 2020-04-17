<template>
  <div class="layout-bottom">
    <div class="container has-text-centered">
      <p>Markers: {{ sheetData.rows.length }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sheetData () {
      return this.$store.state.sheet.data
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-bottom {
  background-color: #4319b6;
  padding: 3px;
  font-size: 0.8rem;
  color: #fff;
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}
</style>
