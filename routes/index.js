const express = require('express')
const dataSetArrondissement = require('./../json/dataSetArrondissement');
const datasetLieuTournage = require('./../json/dataSetLieuTournage')

const router = express.Router();

router.get("/getDataSetArrondissement", async (req, res) => {
 
    res.status(200).json(dataSetArrondissement);
    console.log('Request dataSetArrondissement successful');
})

router.get("/getDatasetLieuTournage", async (req, res) => {

    const limit = parseInt(req.query.limit) || datasetLieuTournage.features.length

    const limitedFeatures = datasetLieuTournage.features.slice(0,limit)

    const limitedResponse = {
        type: 'FeatureCollection',
        features: limitedFeatures
    }
    
  const response = { ...datasetLieuTournage, features: limitedResponse.features };

    res.status(200).json(response);

    console.log('Request datasetLieuTournage successful', response);
})

module.exports = router;