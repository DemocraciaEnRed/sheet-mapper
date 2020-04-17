<template>
  <div class="layout-top">
    <div class="top-container">
      <div class="icon-container">
        <nuxt-link to="/">
          <img src="~/assets/dos-logo.svg" class="dos-icon" alt>
        </nuxt-link>
        <!-- <img src="~/assets/der-logo-white-alt.svg" class="der-icon" alt> -->
      </div>
      <div class="text-container">
        <p class="has-text-right is-size-7">
          Sheet: {{ sheetData.title }}&nbsp;&nbsp;
          <a href target="_blank" class="has-text-white">
            <i class="fas fa-external-link-alt" />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sheetId () {
      return process.env.googleSheetId
    },
    sheetData () {
      return this.$store.state.sheet.data
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-top {
  background-color: #4319b6;
  padding: 10px;
  color: #fff;
  order: 0;
  flex: 0 1 auto;
}
.dos-icon {
  width: auto;
  height: 15px;
  margin-bottom: 0;
  vertical-align: text-top;
}
.der-icon {
  width: auto;
  height: 20px;
  margin-bottom: 0;
  vertical-align: middle;
}
.top-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
}

.icon-container {
  order: 0;
  flex: 1 1 auto;
  align-self: auto;
}

.text-container {
  order: 0;
  flex: 1 1 auto;
  align-self: auto;
}
</style>
