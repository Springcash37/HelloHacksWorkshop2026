const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Pokemon backend is running!'
  })
})

app.get('/api/type/:name', async (req, res) => {
  const { name } = req.params

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${name}/`)

    if (!response.ok) {
      return res.status(404).json({
        error: `Type not found: ${name}`
      })
    }

    const data = await response.json()

    const simplifiedResponse = {
      half_damage_to: data.damage_relations.half_damage_to.map((type) => type.name),
      double_damage_from: data.damage_relations.double_damage_from.map((type) => type.name)
    }

    return res.json(simplifiedResponse)
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to fetch Pokemon type data',
      details: error.message
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
