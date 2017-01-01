export default function hello () {
  console.warn('require ensure component1')
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
    .then(_ => {
      console.info('setTimeout 1000')
      require.ensure(['./component3.js'], _ => {
        const component3 = require('./component3').default
        console.info('load component3 chunk success!')
        component3()
      })
    })
    .catch(err => console.error(err))
}
