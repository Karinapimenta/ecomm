import app from './src/app.js';

const port = process.env.PORT || 3001;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor escutando em http://localhost:${port}`);
});
