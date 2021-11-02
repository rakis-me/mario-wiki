import express from 'express'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'

// controllers
import home from './controllers/home.js'
import games from './controllers/games/index.js'
import gameForm from './controllers/games/form.js'
import gameShow from './controllers/games/show.js'
import * as gameActions from './controllers/games/actions.js'


const csrfProtection = csrf({ cookie: true })
const parseForm = express.urlencoded({ extended: true })

const app = express()
app.use(cookieParser())
app.set('view engine', 'ejs')

app.get('/games', games)
app.get('/games/new', csrfProtection, gameForm)
app.post('/games/create', parseForm, csrfProtection, gameActions.create)
app.get('/games/:id', gameShow)
app.delete('/games/:id', gameActions.remove)
app.get('/games/:id/edit', csrfProtection, gameForm)
app.put('/games/:id', parseForm, csrfProtection, gameActions.update)

app.get('/', home)


app.listen(3000)
console.log('Server listening on port 3000')