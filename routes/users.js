var express = require('express');
var router = express.Router();

function getHelpers (req, res) {
db("SELECT * FROM helper_sign_up ORDER BY id ASC;")
.then(results => { 
  res,send(results.data);
})
.catch(err => res,status(500).send(err));
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



//FOR THE ACTIVITY LIST
router.get("/activity", function (req, res, next) {
  db ("SELECT * FROM activity;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//MEMBERS OFFERING CERTAIN ACTIVITIES   ---IS THIS OK??? (filter??) ---GOOD FOR POSTCODE TOO?
router.get("/filter/:ids/:activity_id", function (req, res, next) {
  db (`SELECT * FROM activity WHERE helper_sign_up_id IN (${req.params.ids}) AND activity_id IN (${req.params.activity_id});`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//FOR THE REGISGRATION FORM (NO ID AS IT IS AUTO INC)
router.post("/", function(req, res) {
  db(`INSERT INTO helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('${req.body.name}', ${req.body.surname}, '${req.body.email}', '${req.body.city}','${req.body.postcode}', '${req.body.activity}', '${req.body.about_me}');`)
    .then(result => {
      if(result.error) {
        res.status(404).send({error: result.error});
      } else {
        getHelpers(req, res)
      }
    })
    .catch(err => res.status(500).send(err));
});


//TO DELETE HELPER PROFILE
router.delete("/helper_sign_up/:id", function(req, res) {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send("Id is a number");
  }
  db(`DELETE FROM helper_sign_up WHERE id=${req.params.id}`)
    .then(results => {
      if (results.error) {
        return res.status(404).send({ error: results.error });
      } else {
        getHelpers(req, res);
      }
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router; 

