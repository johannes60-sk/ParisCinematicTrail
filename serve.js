const express = require('express')
const cors = require('cors')
const route = require('./routes/index')


const app = express();
const PORT = process.env.PORT || 3000;


// Middleware pour autoriser les requêtes cross-domain
const corsOptions = {
  origin: '*',
  credentials: true
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', route);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});