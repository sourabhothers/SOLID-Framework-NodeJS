import connectionMongoose from './database/mongoose/mongooseConnection';
import serviceLocator from './config/serviceLocator';

// conditional import
connectionMongoose;

// initializing serviceLocator
serviceLocator;
