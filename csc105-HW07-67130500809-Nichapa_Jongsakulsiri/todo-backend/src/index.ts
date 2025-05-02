import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { todoRouter } from '../src/router/todo.routes.ts';
import { PrismaClient } from './generated/prisma/index.js';
import { cors } from 'hono/cors';
const app = new Hono()

app.use(
	cors({
		origin: ['http://localhost:5173'], 
	})
);

export const db = new PrismaClient();

app.route('/todo', todoRouter);
app.get('/', (c) => {
  return c.text('Hello Hono!');
});


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
