require('dotenv').config();
const { fetchDataFromAPI, shuffleArray, getFiveCountry } = require('./utils'); 

const express = require ('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  

})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));