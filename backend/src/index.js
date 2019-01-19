/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get('host'),
    port
  )
);

async function createAndList() {
  const restschedule = await app.service('restschedule').find();
  console.log('restschedule', restschedule);
  const restaurants = await app.service('restaurants').get(1);
  console.log('restaurants', restaurants);
}
createAndList();
