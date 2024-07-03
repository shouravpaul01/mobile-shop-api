import express from 'express'
import cors from 'cors'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import { BrandRoutes } from './app/modules/brand/brand.route'
import { ProductRoutes } from './app/modules/product/product.route'

const app = express()

//Parser
app.use(express.json())
app.use(cors())

//Routes
app.use('/api/v1/brands',BrandRoutes)
app.use('/api/v1/products',ProductRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Handle global error
app.use(globalErrorHandler)
export default app
