import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger';
import todoRoutes from './routes/todo.routes.js';


const app = new Hono()
app.use("*",logger());
app.get('/', (c) => {
  return c.json({
    message: 'Welcome to my Todo app',
    status: 'Server is running',
  })
})

app.route('/todos' , todoRoutes)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
