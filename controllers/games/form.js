export default function (req, res) {
  res.render('games/form', {
    title: 'Mario Wiki - Add Game',
    csrf: req.csrfToken(),
    id: '',
    name: '',
    description: '',
    published: ''
  })
}