import express from 'express';
import mongoose from 'mongoose';
import router from './routes';

import { Context } from './types/types';

const { PORT, MONGO_URI } = process.env;

declare global {
  namespace Express {
    interface Request {
      context?: Context;
    }
  }
}

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/api', router);

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Not found',
  });
});

async function main() {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log('Press CTRL + C to stop');
    });
  } catch (error) {
    console.error(error);
  }
}

main();
