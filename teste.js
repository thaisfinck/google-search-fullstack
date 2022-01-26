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
    title: 'JavaScript MDN',
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

results = results.filter(
  e => e.title.includes(req.body.search) || e.includes(req.body.search)
)
console.log(bestResults(results))
