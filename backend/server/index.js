import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes/users.route.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Página no encontrada' }))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

export default app
