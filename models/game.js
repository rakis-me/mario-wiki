import connect from 'hyper-connect'
import * as z from 'zod'

const hyper = connect(process.env['HYPER'])()

const schema = z.object({
  id: z.string().regex(/^game/),
  type: z.literal('game').default('game'),
  name: z.string().max(100),
  description: z.string().max(5000).optional(),
  published: z.string().min(4).max(4)
})

function validate(data) {
  return schema.safeParse(data)
}

export async function add(game) {
  const { success, data, error } = validate(game)
  if (success) {
    return await hyper.data.add(data)
  } else {
    return {ok: false, error}
  }
}

export async function get(id) {
  const game = await hyper.data.get(id) 
  const { success, data, error } = validate(game)
  if (success) {
    return data
  } else {
    return error
  }
}

export async function list() {
  // call hyper to get a list
  const result = await hyper.data.query({ type: 'game' })
  if (result.ok) {
    return result.docs
  } else {
    return []
  }
}

export async function remove(id) {
  return await hyper.data.remove(id) 
}

export async function update(id, game) {
  const { success, data, error } = validate(game)
  if (success) {
    return await hyper.data.update(id, data)
  } else {
    return { ok: false, error }
  }
}