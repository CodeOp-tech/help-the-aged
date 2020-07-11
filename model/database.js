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

// ACTIVITY TABLE
  let sql = 
  "DROP TABLE if exists activity; CREATE TABLE activty (id INT NOT NULL AUTO_INCREMENT, activity_name text not null, image text null, PRIMARY KEY (id));";
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

// ACTIVITY DUMMY DATA
  sql = 
  "INSERT INTO helptheaged.activity (id, ) VALUES (1, );";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

// HELPER SIGN UP DUMMY DATA
  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Grocery Shopping', 1, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Go For A Walk', 2, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Become Pen Pals', 3, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Pharmacy Run', 4, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Have A Tea', 5, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Help With Tech', 6, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Phone Chat', 7, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO helptheaged.helper_sign_up (activity_name, id, image) VALUES ('Read Books', 8, 'https://www.griswoldhomecare.com/wp-content/uploads/2019/11/bigstock-Man-Sitting-On-Sofa-And-Readin-302783236.jpg')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  con.end();
});