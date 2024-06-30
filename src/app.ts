import express from 'express'
import cors from 'cors'
import { globalErrorHandle } from './app/middleware/globalErrorHandle'
const app = express()

//Parser
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Handle global error
app.use(globalErrorHandle)
export default app
