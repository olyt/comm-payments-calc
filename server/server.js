const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION. Server shutting down');
  process.exit(1);
});

const app = require('./app');

// starting server
const port = process.env.PORT || 5000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'));

const server = app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION. Server shutting down');
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('Sigterm received. Shutting down gracefully!');
  server.close(() => {
    console.log('Process terminated!');
  });
});
