const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisine: 'Thai, Pan-Asain',
        pic: '/images/place-2.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisine: 'Coffee, Bakery',
        pic: '/images/place-1.jpg'
    }]
    res.render('places/index', {places})
})

module.exports = router