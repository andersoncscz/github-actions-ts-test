import express from 'express'

// Using tsconfig-paths to verifies how build proccess will work running on a CI in Github actions.
import { PORT } from '@constants/'


const app = express()

app.get('/', (req, res) => {
  res.send("We're running baby! :D")
})

app.get('/email', (req, res) => {
  res.json({
    email: 'andersoncscz@hotmail.com'
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
