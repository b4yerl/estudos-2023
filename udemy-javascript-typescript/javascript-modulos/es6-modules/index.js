import express from 'express'
import { route } from "./route.js";

const app = express();

app.use('/', route)

app.listen(3000, () => console.log('Listening on 3000'))