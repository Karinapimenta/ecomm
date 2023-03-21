/* eslint-disable no-console */
import redis from 'redis';

const client = redis.createClient({
  socket: {
    host: 'redis',
    port: '6379',
    prefix: 'blacklist',
  },

});
client.connect();
client.on('error', (error) => {
  console.error(error);
});

client.on('connect', () => {
  console.log('Redis Connected!');
});
export default client;
