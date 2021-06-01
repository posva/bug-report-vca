const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const VCA = require('@vue/composition-api')
const { ref, set } = VCA

Vue.use(VCA.default)
const state = ref({ old: ref(false) })
set(state.value, 'new', ref(true))
console.log(process.server, 'state.value', JSON.stringify(state.value))

// const app = new Vue({
//   template: `<div>nothing</div>`,
//   created() {
//     const state = ref({ old: ref(false) })
//     set(state.value, 'new', ref(true))
//     console.log(
//       'server',
//       process.server,
//       'state.value',
//       JSON.stringify(state.value)
//     )
//   }
// })

// renderer.renderToString(app, (err, html) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(`
//       <!DOCTYPE html>
//       <html lang="en">
//         <head><title>Hello</title></head>
//         <body>${html}</body>
//       </html>
//     `)
//   }
// })
