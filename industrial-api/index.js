const express = require('express')
const app = express()


app.use(express.json())
app.use('/api/v1', require('./routers/router'))


app.listen(3000, () => {
    console.log(`industrial api listening on port 3000`)
})