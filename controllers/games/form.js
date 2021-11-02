import * as games from '../../models/game.js'

export default async function (req, res) {
  if (req.params.id) {
    const game = await games.get(req.params.id)
    console.log(game)
    return res.render('games/form', {
      title: 'Mario Wiki - Update Game',
      csrf: req.csrfToken(),
      description: '',
      ...game
      
    })
  }
  res.render('games/form', {
    title: 'Mario Wiki - Add Game',
    csrf: req.csrfToken(),
    id: '',
    name: '',
    description: '',
    published: ''
  })
}