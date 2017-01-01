import _ from 'underscore'
import component2 from './components/component2'

console.warn('Entry(index) Bootstraping')
require.ensure(['./components/component1'], _ => {
  const component1 = require('./components/component1').default
})
