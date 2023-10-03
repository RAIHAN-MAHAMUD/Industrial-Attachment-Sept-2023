const express = require('express')
const mongoose = require("mongoose");
const { CustomErrorHandler, CustomErrorPrepared } = require('./error-handler/error-handler')
const { identity } = require('./role-management/identity')
const app = express()


app.use(express.json())
// app.use(identity)
app.use('/api/v1', require('./routers/router'))

app.get('/api/v1/ping', (req, res) => {
    res.send('running...')
})

app.get('/api/v1/health', (req, res) => {
    res.send('db health is ok...')
})

// app.use(CustomErrorHandler)
// app.use(CustomErrorPrepared)

// mongoose.connect(`mongodb://localhost:27017/industrial_api`, { useNewUrlParser: true })
//     .then(
//         app.listen(3000, () => {
//             console.log(`industrial api listening on port 3000`)
//         })
//     ).catch(e => {
//         console.log(e);
//     });

app.listen(3000, async () => {
    await mongoose.connect(`mongodb://localhost:27017/industrial_api`, { useNewUrlParser: true })
    console.log(`industrial api listening on port 3000`)
})

