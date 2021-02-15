import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5001;

// routes
const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send('Hello World! - server');
})

// use routers
app.use('/', router);

// listen
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})