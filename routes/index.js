var express = require('express');
var router = express.Router();
const service =  require('../services/dnaMutation.js');
var admin = require("firebase-admin");
var serviceAccount = require("../dnaserver-e6327-firebase-adminsdk-5nbfm-3a4d69d659.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dnaserver-e6327.firebaseio.com/"
});

router.get('/stats', getStats);
router.post('/mutation', hasMutation);

function getStats(req, res) {
  let database = admin.database();
  let countMutation = 0;
  let countNoMutation = 0;
  let ratio = 0;
  let ref = database.ref('dna');
  database.ref('dna').
  ref.on("value", (item ) => {

    let items=  item.val();
    for (let key of Object.keys(items)) {
        let dna = items[key];
        if (dna && dna.hasMutation) {
          countMutation++;
        } else {
          countNoMutation++;
        }
    }
    return res.status(200).json({
      count_mutations: countMutation,
      count_no_mutation: countNoMutation,
      ratio: countNoMutation !== 0 ? countMutation/countNoMutation : 1
    });

  });


}

function hasMutation(req, res){
  if (req.body.dna) {
    let hasMutation =  service(req.body.dna);
    let database = admin.database();
    database.ref('dna').push({
      dna: req.body.dna,
      hasMutation
    });
    if (hasMutation) {
      return res.status(200).json({
        msg: 'Se proceso correctamente',
        hasMutation,
        status: 200
      })
    }else {
      return res.status(403).json({
        msg: 'Se proceso correctamente',
        hasMutation,
        status: 200
      })
    }


  } else {
    return res.status(500).json({
      error: 'No se mando ninguna cadena',
      hasError: true,
      status: 500
    })
  }

}

module.exports = router;
