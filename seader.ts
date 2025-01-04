/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const admins = require('./data.ts');

// Load environment variables from .env file
dotenv.config();

// Database connection setup
const MONGO_URI = process.env.DATABASE_URL;
mongoose.Promise = global.Promise;

const connectToDB = async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', true);
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    // eslint-disable-next-line no-console
    console.log('Connected to database');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to connect to database', err);
    process.exit(1);
  }
};

// Define the model directly in the script

const { Schema, model } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  },
});

const User = model('User', userSchema, 'User');

// Function to import data
const importData = async () => {
  try {
    await User.insertMany(admins);
    // eslint-disable-next-line no-console
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error}`);
    process.exit(1);
  }
};

// Connect to the database and import data
const run = async () => {
  await connectToDB();
  await importData();
};

run();

export {};
