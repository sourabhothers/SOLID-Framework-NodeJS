import mongoose from 'mongoose';

mongoose.connect(
  'mongodb://127.0.0.1:27017/121121-testDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      throw new Error('Mongoose unable to connect to db.');
    }
    console.log('Database connected successfully ...');
  },
);
