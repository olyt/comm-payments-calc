const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
// const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error');
const feeRatesRouter = require('./routes/feeRate');

const app = express();
app.enable('trust proxy');

// global middlewares

// implement CORS
// app.use(cors());
// app.options('*', cors());

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

// set security HTTP headers
app.use(helmet());

// limit requests from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'To many requests from this IP, try again later',
});
app.use('/api', limiter);

// body parser, reading data from req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// data sanitization against noSQL query injection
app.use(mongoSanitize());

// data sanitization against XSS
app.use(xss());

// prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'price',
    ],
  })
);
app.use(compression());

// routes
app.use('/api/v1/fee-rates', feeRatesRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
