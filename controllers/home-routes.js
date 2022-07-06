const res = require('express/lib/response')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('homepage')
})

module.exports = router