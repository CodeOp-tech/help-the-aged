var express = require('express');
var router = express.Router();
const db = require("../model/helper");  //TO CONNECT TO DB


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
  console.log("hellodata");
  db ("SELECT * FROM activity;")
    .then(results => {
      console.log(results);  //is a variable, no quotation
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//FOR THE HELPER_SIGN_UP
router.get("/helper_sign_up", function (req, res, next) {
  db ("SELECT * FROM helper_sign_up;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//FIND MEMBERS BASED ON ACTIVITIES 
router.get("/filter/:activity_id", function (req, res, next) {
  db (`SELECT helper_sign_up.name, helper_sign_up.city, helper_sign_up.postcode, activity.activity_name FROM helper_activity inner join helper_sign_up on helper_activity.helper_sign_up_id=helper_sign_up.id inner join activity on helper_activity.activity_id=activity.id WHERE helper_activity.activity_id='${req.params.activity_id}';`)
      .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


//FIND MEMBERS BASED ON POSTCODE     
router.get("/filtertwo/helper_sign_up/:postcode", function (req, res, next) {
  db (`SELECT helper_sign_up.name, helper_sign_up.surname, helper_sign_up.postcode, helper_sign_up.email, helper_sign_up.about_me, helper_sign_up.city, activity.activity_name FROM helper_activity inner join helper_sign_up on helper_activity.helper_sign_up_id=helper_sign_up.id inner join activity on helper_activity.activity_id=activity.id WHERE helper_sign_up.postcode='${req.params.postcode}';`)
      .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


//FILL REGISTRATION FORM AND INTERMEDIATE TABLE
function insertActivities(id, Arr, res){
  // For each activity on the list, we need to do an insert in the intermediate table, connecting user_id and activity_id
  for (let i = 0; i < Arr.length; i++) {

  db(`INSERT INTO helper_activity (helper_sign_up_id, activity_id) VALUES ('${id}', '${Arr[i]}');`)
  
   .then(result => {
     if(result.error) {
       res.status(404).send({error: result.error});
        } else{
         res.send("Query worked");
        }
    })
  .catch(err => res.status(500).send(err));
 }
}

//JOINED DATA FROM 2 TABLES FOR MEMBERS' DETAILS   ---WILL THIS WORK???
router.get("/helperSignUp-with-activity", function(req,res,next){
  db("select helper_sign_up.name as Name, helper_sign_up.surname as Surname, helper_sign_up.email as Email, helper_sign_up.city as City, helper_sign_up.postcode as Postcode, helper_sign_up.about_me as AboutMe, activity.activity_name as Activity, activity.image as ActivityLogo, helper_sign_up.ID as ID from helper_sign_up INNER JOIN activity ON activity.id=activity.ID;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
  
router.post("/", function(req, res) {
  console.log(req.body.activities);
db(`INSERT INTO helper_sign_up (name, surname, email, city, postcode, about_me) VALUES ('${req.body.name}', '${req.body.surname}', '${req.body.email}', '${req.body.city}','${req.body.postcode}', '${req.body.about_me}');`)
.then(result => {
if(result.error) {
 res.status(404).send({error: result.error});
  } else {

  db('SELECT ID FROM helper_sign_up ORDER BY ID DESC LIMIT 1;')  //WE GET THE USER ID
    .then(answer => {
     if(answer.error) {
      res.status(404).send({error: answer.error}); 
       }else{
         return insertActivities(answer.data[0].ID, req.body.activities, res);
       }
    })
    .catch(err => res.status(500).send(err));
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

