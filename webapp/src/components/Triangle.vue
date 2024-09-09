<template>
  <canvas class="zdog-canvas m-auto mt-9" width="300" height="300"></canvas>
</template>

<script>
import Zdog from 'zdog'

export default {
  name: 'Triangle',
  data: function () {
    return {
      isSpinning: true
    }
  },
  methods: {
    draw() {
      let self = this
      let illo = new Zdog.Illustration({
        element: '.zdog-canvas',
        dragRotate: true
      })

      new Zdog.Polygon({
        addTo: illo,
        radius: 130,
        sides: 3,
        stroke: 10,
        color: '#71ff3f'
      })

      function animate() {
        illo.rotate.y += self.isSpinning ? 0.02 : 0
        illo.updateRenderGraph()
        requestAnimationFrame(animate)
      }

      animate()
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.draw()
    }, 500)
  }
}
</script>
