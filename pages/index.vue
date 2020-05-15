<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8 has-text-centered">
            <a href="https://democraciaos.org" target="_blank">
              <img src="~/assets/dos-logo.svg" class="dos-icon">
            </a>
            <h1 class="title is-2 is-size-3-mobile">
              Google Sheet + Mapbox Mapper
            </h1>
            <h1 class="subtitle is-5 is-size-6-mobile">
              No-coding mapper for everyone to contribute in Google Sheets
            </h1>
            <br>
            <br>
            <div class="buttons is-centered is-marginless">
              <button class="button is-white is-outlined is-medium" :class="{'is-loading': isLoading}" @click="goToMap">
                Launch!&nbsp;<i class="fas fa-rocket" />
              </button>
            </div>
            <p class="is-size-7">
              <a
                :href="`https://docs.google.com/spreadsheets/d/${sheetId}`"
                target="_blank"
                class="has-text-white"
              >Open the example sheet&nbsp;<i class="fas fa-external-link-alt fa-fw" /></a>
            </p>
            <p class="is-size-7">
              <a
                href="https://github.com/DemocraciaEnRed/sheet-mapper"
                target="_blank"
                class="has-text-white"
              >Check the code in <i class="fab fa-github fa-fw" /> Github &nbsp;<i class="fas fa-external-link-alt fa-fw" />
              </a>
            </p>
            <br>
            <br>
            <div class="columns is-centered is-vcentered is-mobile">
              <div class="column is-narrow">
                <a href="https://democraciaenred.org" target="_blank"><img src="~/assets/der-logo-white.svg" class="der-icon"></a>
              </div>
              <div class="column is-narrow has-text-left">
                <p class="is-size-7">
                  Developed by<br><a href="https://democraciaenred.org" class="has-text-white"><b>Democracia en Red</b></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    sheetId () {
      return this.$env.googleSheetId
    }
  },
  methods: {
    goToMap () {
      this.isLoading = true
      this.$router.push({
        path: '/map'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dos-icon {
  width: 350px;
  margin: 0 auto 30px;
}
.der-icon {
  width: 40px;
  margin: 0 auto 0px;
}
</style>
