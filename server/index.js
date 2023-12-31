import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

import postRoutes from './Routes/postRoutes.js'
import dalleRoutes from './Routes/dall-eRoutes.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post',postRoutes)
app.use('/api/v2/dalle', dalleRoutes)


app.get('/', async (req, res) => {
  res.send('Hello From DALL-E');

});
const start = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('server listen at port number 8080'));
  } catch (error) {
    console.log(error);
  }
};

start();
