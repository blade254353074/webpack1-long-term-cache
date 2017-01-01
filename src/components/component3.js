console.warn('require ensure component3')

fetch('http://example.com/', { mode: 'no-cors' })
  .then(_ => { console.log('GET http://example.com/') })
  .catch(err => console.error(err))
