require('dotenv').config();
const { fetchDataFromAPI, shuffleArray, getFiveCountry } = require('./utils'); 

const express = require ('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  const { continent } = req.body;
  const data = await fetchDataFromAPI(continent);
  const shuffled = shuffleArray(data);
  const finalArray = getFiveCountry(shuffled);
  console.log(finalArray);
  // res.json(req.body.continent);

})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));