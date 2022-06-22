const express = require('express')
const cors = require('cors')
const axios = require('axios');

const app = express()
const port = 3000
app.use(cors())

// endPoints
let endPoints = {
    search : "/search",
    info : "/info",
}

const omdbapiKey ="b5ec0aab"

let omdbapiUrlWithKey = `https://omdbapi.com/?apikey=${omdbapiKey}`

// ==== end points =======

// getCandidate
app.get(endPoints.search, (req, res) => {

    axios.get(`${omdbapiUrlWithKey}&s=${req.query.s}` )
        .then(response => {
            res.send(response.data)
        })

})



app.get(endPoints.info, (req, res) => {

    axios.get(`${omdbapiUrlWithKey}&i=${req.query.i}` )
        .then(response => {
            console.log(response.data)
            res.send(response.data)
        })

})

// start listener
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})