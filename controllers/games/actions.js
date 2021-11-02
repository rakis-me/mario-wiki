import * as games from '../../models/game.js'
import cuid from 'cuid'

export async function create(req, res) {
  const { name, description, published } = req.body
  const result = await games.add({
    id: 'game-' + cuid(),
    type: 'game',
    name,
    description,
    published
  })
  if (result.ok) {
    res.render('games/success', { title: 'Mario Wiki - Add Game Success' })
  } else {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Error could not save game</h1>')
  }

}

export async function remove(req, res) {
  const result = await games.remove(req.params.id)
  if (result.ok) {
    res.send({ok: true})
  } else {
    res.send({ok: false, error: result.error })
  }
}

export async function update(req, res) {
  const id = req.params.id
  const game = req.body 
  const result = await games.update(id, game) 
  if (result.ok ) {
    res.render('games/success', { title: 'Mario Wiki - Successfully Updated!'})
  } else {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Error could not save game</h1>')
  }
}