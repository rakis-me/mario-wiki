import { list } from '../../models/game.js'

export default async function (req, res) {
  const games = await list()
  return res.render('games/index', { title: 'Mario Wiki - Games', games })
}