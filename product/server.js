import app from './src/app.js';

<<<<<<< HEAD
const port = process.env.PORT || 3004;
=======
const port = process.env.PORT || 3000;
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
