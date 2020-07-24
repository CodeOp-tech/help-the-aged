var express = require("express");
var router = express.Router();
const db = require("../model/helper"); //TO CONNECT TO DB

function getHelpers(req, res) {
  db("SELECT * FROM helper_sign_up ORDER BY id ASC;")
    .then((results) => {
      res, send(results.data);
    })
    .catch((err) => res, status(500).send(err));
}

//GET users listing
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


//FOR THE HELPER_SIGN_UP
router.get("/helper_sign_up", function (req, res, next) {
  db("SELECT * FROM helper_sign_up;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});


//TO SELECT USERS WITH THEIR CLICKED ACTIVITIES
router.get("/helperSignUp-with-activity", async (req, res) => {
  // select all the users
  const results = await db("SELECT * FROM helper_sign_up;");
  //and for each user...
  // results.data.forEach(async (user, i) => {
  for (let i = 0; i < results.data.length; i++) {
    const user = results.data[i];
    //select all her activities
    const activities = await db(
      `SELECT act.* 
      FROM helper_activity AS ha 
      LEFT JOIN activity AS act ON act.id = ha.activity_id 
      WHERE ha.helper_sign_up_id = ${user.id};`
    );
    console.log(activities.data);
    // and save them in the 'activities' property of the user
    results.data[i].activities = activities.data;
  }
  // return the whole thing
  res.send(results.data);
});


//TO POST TOGETHER WITH THE CLICKED ACTIVITES
router.post("/", async (req, res) => {
  const { name, surname, email, city, postcode, about_me, act } = req.body;

  // insert the new user
  await db(
    `INSERT INTO helper_sign_up (name, surname, email, city, postcode, about_me) VALUES ("${name}","${surname}","${email}","${city}","${postcode}","${about_me}");`
  );

  // console.log(sql);
  // //and grab the new user's ID (the last user inserted)
  const results = await db("SELECT * FROM helper_sign_up ORDER BY id DESC;");
  const user_id = results.data[0].id;

  // //and for each activity that we receive in the request & insert it into the pivot table
  for (let i = 0; i < req.body.act.length; i++) {
    const activity_id = req.body.act[i];
    await db(
      `INSERT INTO helper_activity (helper_sign_up_id, activity_id) VALUES ('${user_id}', '${activity_id}');`
    );
  }
  // results.data[i].user_id = user_id.data;
  res.send({ msg: "Helper saved with activities!" });
});



//FIND MEMBERS BASED ON ACTIVITIES
router.get("/filter/:activity_id", function (req, res, next) {
  db(
    `SELECT helper_sign_up.name, helper_sign_up.city, helper_sign_up.postcode, activity.activity_name FROM helper_activity inner join helper_sign_up on helper_activity.helper_sign_up_id=helper_sign_up.id inner join activity on helper_activity.activity_id=activity.id WHERE helper_activity.activity_id='${req.params.activity_id}';`
  )
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});


//FIND MEMBERS BASED ON POSTCODE
router.get("/filtertwo/helper_sign_up/:postcode", function (req, res, next) {
  db(
    `SELECT helper_sign_up.name, helper_sign_up.surname, helper_sign_up.postcode, helper_sign_up.email, helper_sign_up.about_me, helper_sign_up.city, activity.activity_name FROM helper_activity inner join helper_sign_up on helper_activity.helper_sign_up_id=helper_sign_up.id inner join activity on helper_activity.activity_id=activity.id WHERE helper_sign_up.postcode='${req.params.postcode}';`
  )
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});


//FOR THE ACTIVITY LIST
router.get("/activity", function (req, res, next) {
  db("SELECT * FROM activity;")
    .then((results) => {
      console.log(results); //is a variable, no quotation
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});


//TO DELETE HELPER PROFILE
router.delete("/helper_sign_up/:id", function (req, res) {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send("Id is a number");
  }
  db(`DELETE FROM helper_sign_up WHERE id=${req.params.id}`)
    .then((results) => {
      if (results.error) {
        return res.status(404).send({ error: results.error });
      } else {
        getHelpers(req, res);
      }
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;

