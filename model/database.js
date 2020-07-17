require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "helptheaged",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = 
  "set foreign_key_checks = 0;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

// ACTIVITY TABLE
  sql = 
  "DROP TABLE if exists activity; CREATE TABLE activity (id INT NOT NULL AUTO_INCREMENT, activity_name text not null, image text null, PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

// HELPER SIGN UP
  sql = 
  "DROP TABLE if exists helper_sign_up; CREATE TABLE helper_sign_up (id INT NOT NULL AUTO_INCREMENT, name text NOT NULL, surname text NOT NULL, email text NOT NULL, city text NOT NULL, postcode char(8) NOT NULL, activity text NOT NULL, about_me varchar(200), PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  // CONNECTING TABLE
  sql = 
  "DROP TABLE if exists helper_activity; CREATE TABLE helper_activity (id INT NOT NULL AUTO_INCREMENT, helper_sign_up_id INT, activity_id INT, PRIMARY KEY (id), FOREIGN KEY (helper_sign_up_id) references helper_sign_up(id), FOREIGN KEY (activity_id) references activity(id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

// ACTIVITY TABLE DATA
  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Grocery Shopping', 1, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Go For A Walk', 2, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Writing Letters', 3, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Pharmacy Run', 4, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Walk Your Pet', 5, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Help With Tech', 6, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Weekly Phone Call', 7, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.activity (activity_name, id, image) VALUES ('Gardening', 8, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });


// HELPER SIGN UP TABLE DATA
sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Hermione', 'Granger', 'hermione@gmail.com', 'London', 'W1W7NE', 'Grocery Shopping', 'Hi, I am happy to do grocery shopping for you.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});


sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Harry', 'Potter', 'h.potter@yahoo.com', 'London', 'E61HZ', 'Go For A Walk', 'Hi, I am happy to walk with you once a week.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Lord', 'Voldemort', 'voldemort@yahoo.co.uk', 'London', 'W127GF', 'Grocery Shopping','Pharmacy Run', 'Hi, I can do your grocery shopping or pharmacy run.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});


sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Draco', 'Malfoy', 'draco@hotmail.com', 'London', 'EC3N4AB', 'Gardening', 'Hi, I can help with your gardening on the weekends.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Albus', 'Dumbledore', 'dumbledore@gmail.com', 'London', 'NW15LR', 'Writing Letters', 'Hi, I can exchange letters with you.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Severus', 'Snape', 's.snape@hotmail.com', 'London', 'N226YQ', 'Walk Your Pet', 'Help With Tech', 'Hi, I can help with your tech issues or walk your pet.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Ron', 'Weasley', 'ron.weasley@gmail.com', 'London', 'E201EL', 'Weekly Phone Call', 'Hi, I can have phone chat with you on weekday evenings.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Rubeus', 'Hagrid', 'hagrid@yahoo.com', 'London', 'TW61AH', 'Help With Tech', 'Hi, I can help with your tech issues.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Luna', 'Lovegood', 'lovegood@gmail.com', 'London', 'CR91SX', 'Go For A Walk', 'Hi, I am happy to walk with you in the afternoons.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Minerva', 'McGonagall', 'mcgonagall@yahoo.com', 'London', 'W53TJ', 'Hi, I am happy to do your grocery shopping or walk your pet.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Neville', 'Longbottom', 'longbottom@yahoo.com', 'London', 'SW191QT', 'Walk Your Pet', 'Hi, I can walk your pet once a week.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_sign_up (name, surname, email, city, postcode, activity, about_me) VALUES ('Sirius', 'Black', 'sirius@gmail.com', 'London', 'BR11NY', 'Go For A Walk', 'Gardening', 'Hi, I can do your gardening or walk with you.')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});



// HELPER_ACTIVITY TABLE DATA
sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (1, 1)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (2, 2)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});


sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (9, 1)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (9, 4)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (43, 8)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (44, 3)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (45, 6)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (45, 5)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (46, 7)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (47, 6)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (48, 2)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (49, 1)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (49, 5)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (50, 5)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (51, 8)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"INSERT INTO helptheaged.helper_activity (helper_sign_up_id, activity_id) VALUES (51, 2)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");
});

sql = 
"set foreign_key_checks = 1;";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table creation `items` was successful!");

});


  con.end();
});





