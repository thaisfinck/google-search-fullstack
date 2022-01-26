// Import Packages
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('results')
})

// Create POST controller
router.post('/', (req, res) => {
  console.log(req.body)
  let results = [
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      urlDescription: 'www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'JavaScript | MDN',
      description: 'The best JavaScript tutorials in the world!',
      url: 'https://developer.mozilla.org/en-US/',
      urlDescription: 'developer.mozilla.org/en-US',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://developer.mozilla.org/en-US/'
        },
        {
          title: 'JS for the Web',
          url: 'https://developer.mozilla.org/en-US/'
        }
      ]
    },
    {
      title: 'JavaScript | Wikipedia',
      description: 'The best JavaScript tutorials!',
      url: 'https://en.wikipedia.org/wiki/JavaScript',
      urlDescription: 'wikipedia.org/wiki/JavaScript',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://en.wikipedia.org/wiki/JavaScript'
        },
        {
          title: 'JS for the Web',
          url: 'https://en.wikipedia.org/wiki/JavaScript'
        }
      ]
    }
  ]

  let filtered = results.filter(
    e =>
      e.title.includes(req.body.search) ||
      e.description.includes(req.body.search)
  )
  res.render('results', { filtered })
})

// Export module
module.exports = router
