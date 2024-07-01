import express from 'express'
import cors from 'cors'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import { CategoryRoutes } from './app/modules/category/category.route'
const app = express()

//Parser
app.use(express.json())
app.use(cors())

//Routes
app.use('/api/v1/categories',CategoryRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Handle global error
app.use(globalErrorHandler)
export default app
