import _ from 'underscore'

console.warn('Entry(index) Bootstraping')
require.ensure([
  './views/page1',
  './views/page2'
], _ => {
  // require('./components/component1').default
  require('./views/page1')
  require('./views/page2')
})
