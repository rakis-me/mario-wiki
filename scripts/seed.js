import connect from 'hyper-connect'

const hyper = connect(process.env['HYPER'])()

await hyper.data.bulk([
  { id: 'game-1', type: 'game', name: 'Donkey Kong', published: '1981' },
  { id: 'game-2', type: 'game', name: 'Donkey Kong Jr.', published: '1983'},
  { id: 'game-3', type: 'game', name: 'Mario Bros.', published: '1983'},
  { id: 'game-4', type: 'game', name: 'Wrecking Crew', published: '1985'},
  { id: 'game-5', type: 'game', name: 'Super Mario Bros', published: '1986'},
  { id: 'game-5', type: 'game', name: 'Super Mario Bros 2', published: '1988'},
  { id: 'game-5', type: 'game', name: 'Super Mario Bros 3', published: '1989'}
])

console.log(await hyper.data.list())