import Router from 'express'
import { getTest } from './controller.js'

export const route = Router();

route.get('/', getTest)