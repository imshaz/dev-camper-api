const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: "show list of boot-camps" })
})

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `show single bootcamp with id  ${req.params.id}` })
})

router.post('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `create a bootcamp with id  ${req.params.id}` })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `update a bootcamp with id  ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `delete a bootcamp with id  ${req.params.id}` })
})


module.exports = router
