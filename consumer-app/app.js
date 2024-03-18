import express from 'express';

/*
*-----------------Include routes----------------
*/
import indexRoutes from './src/routes/indexRoutes.js';

/*
*--------------Middleware section---------------
*/
const app = express();
app.enable('trust proxy');
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* **********************************************************
*-------------------Use Routes middleware-------------------
*********************************************************** */
app.get('/', async (req, res) => {
  try {
    const reqOrigin = req.get('origin');
    const env = process.env.NODE_ENV || 'NA';
    const memUsage = process.memoryUsage();
    Object.keys(memUsage).forEach((key) => {
      memUsage[key] = `${Math.round((memUsage[key] / 1024 / 1024) * 100) / 100} MB`;
    });

    res.status(200).json({
      statusText: 'OK',
      statusValue: 200,
      message: '👋 Hello by Consumer App',
      payload: { env, reqOrigin, memUsage },
    });
  } catch (err) {
    res.status(500).json({ statusText: 'ERROR', statusValue: 500, messages: 'Unable to complete your request..' });
  }
});

/*------------------------------------------*/
app.use('/', indexRoutes);

/*-------------------------------------------*/
app.all('*', async (req, res) => {
  const ip = req.headers['x-forwarded-for'];
  res.status(404).json({
    statusText: 'FAIL', statusValue: 404, message: 'Requested url is not available..', ipAddress: ip,
  });
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') {
    console.log(err);
  }
  console.log(typeof next);
  res.status(err.status || 500).json({
    statusText: 'ERROR', statusValue: err.status || 500, message: err.errMsg || 'Unable to Process your request',
  });
});

/*
*----------------------------------------
*/

export default app;
