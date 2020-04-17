<template>
  <section class="layout-container">
    <Navbar />
    <Mapper />
    <Footer />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar'
import Mapper from '~/components/Mapper'
import Footer from '~/components/Footer'

export default {
  name: 'Map',
  components: {
    Navbar,
    Mapper,
    Footer
  },
  asyncData ({ app, params, store }) {
    return app.$axios.get(`${app.$env.baseUrl}/api/sheets`)
      .then((res) => {
        store.commit('sheet/commit', res.data)
      })
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  height: 100vh;
}

</style>
