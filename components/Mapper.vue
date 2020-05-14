<template>
  <div class="layout-mapper">
    <mapbox
      ref="theMap"
      :access-token="mapboxApiKey"
      :map-options="mapboxOptions"
      @map-load="loaded"
    />
  </div>
</template>

<script>
/* eslint-disable no-undef */
import Mapbox from 'mapbox-gl-vue'

export default {
  components: { Mapbox },
  data () {
    return {
      mapboxOptions: {
        style: this.$env.mapboxMapStyle,
        center: [this.$env.mapCenterLongitude, this.$env.mapCenterLatitude],
        zoom: this.$env.mapZoomDefault
      }
    }
  },
  computed: {
    mapboxApiKey () {
      return this.$env.mapboxApiKey
    },
    sheetData () {
      return this.$store.state.sheet.data
    },
    extraHeaders () {
      if (!this.sheetData) { return [] }
      const noExtra = ['title', 'latitude', 'longitude', 'color']
      const extraHeaders = this.sheetData.headers.filter((x) => {
        return !noExtra.includes(x)
      })
      return extraHeaders
    }
  },
  methods: {
    loaded (map) {
      this.addPoints(map)
    },
    addPoints (map) {
      // iterate through your table to set the marker to lat/long values for each row
      this.sheetData.rows.forEach((row) => {
        // Create the Title
        let str = `<h3>${row.title}</h3>`
        str += '<h4>'
        this.extraHeaders.forEach((header) => {
          str += `<p><b>${header}</b><br/>${row[header] || '<i>- No Data -</i>'}</p>`
        })
        str += '</h4>'
        // create a variable for your popup for the current event
        const popup = new mapboxgl.Popup().setHTML(str) // use the table to populate your popup with text

        // create a variable for your markup and add it to the map
        new mapboxgl.Marker({
          color: row.color
        })
          .setLngLat([row.longitude, row.latitude])
          .setPopup(popup)
          .addTo(map) // add the marker to the map
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-mapper {
  // background-color: #2a2b33;
  flex: 1 0 auto;
  align-self: auto;
}
.mapboxgl-map {
  height: 100%;
}
</style>
