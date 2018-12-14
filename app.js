'use strict'

const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000


app.use(express.static(__dirname))

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})