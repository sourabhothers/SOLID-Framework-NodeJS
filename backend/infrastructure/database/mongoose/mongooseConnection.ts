import mongoose, { MongooseOptions } from 'mongoose';

const connectionURL = 'mongodb://localhost:27017/131121-usersTest';

const connectionOpts: MongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(connectionURL, connectionOpts, (err) => {
  if (err) {
    return console.error(
      `Error while establishing mongoose database connection : ${err}`,
    );
  }
  console.log(`mongoose connection established successfully`);
});

export default mongoose;
