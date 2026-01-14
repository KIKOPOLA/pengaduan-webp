import { db } from '../../utils/db'
import { requireAuth } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const user = requireAuth(event)

  // hanya admin
  if (user.role !== 'admin') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const id = Number(event.context.params?.id)

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })
  }

  const [result]: any = await db.query(
    'DELETE FROM complaints WHERE id = ?',
    [id]
  )

  if (result.affectedRows === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Complaint not found' })
  }

  return {
    success: true,
    message: 'Pengaduan berhasil dihapus',
  }
})
