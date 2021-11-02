import * as games from '../../models/game.js'

export default async function (req, res) {
    const game = await games.get(req.params.id)
    res.render('games/show', {title: 'Mario Wiki - Game: ' + game.name, game }) 
}