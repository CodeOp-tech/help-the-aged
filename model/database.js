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
  database: DB_NAME || "bookclub",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = 
  "DROP TABLE if exists books; CREATE TABLE books (id INT NOT NULL AUTO_INCREMENT, title text null, author text null, year int null, country text null, summary text null, genre text null, cover text null, PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (1, 'The Testaments', 'Margaret Atwood', 2019, 'Canada', 'More than fifteen years after the events of The Handmaid s Tale, the theocratic regime of the Republic of Gilead maintains its grip on power, but there are signs it is beginning to rot from within.', 'fiction', 'https://images-na.ssl-images-amazon.com/images/I/41-m9MGUgoL._SX325_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (2, 'Little Fires Everywhere', 'Celeste Ng', 2017, 'United-States', 'Set in Shaker Heights, Ohio, Little Fires Everywhere tells the story of Elena Richardson, a woman who thrives on structure and rules, and her family. When Mia Warren, an artist who has been living a nomadic lifestyle as a single mother with her daughter, Pearl, arrives in town, it threatens everything that Mrs. Richardson has known. Slowly, Mia becomes the enemy of Mrs. Richardson. Meanwhile, in another part of town, close friends of the Richardsons have adopted a Chinese-American baby, which results in a custody battle. When a fire breaks out in the Richardson home, the town is buzzing with their ideas on who the suspect is.', 'fiction', 'https://images-na.ssl-images-amazon.com/images/I/517csK6FnqL._SX316_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (3, 'Eleanor Oliphant is Completely Fine', 'Gail Honeyman', 2017, 'Scotland', 'The novel focuses on 29-year-old Eleanor Oliphant, a social misfit with a traumatic past who becomes enamoured of a singer, whom she believes she is destined to be with. It deals with themes of isolation and loneliness, and depicts Eleanor s transformation journey towards a fuller understanding of self and life.', 'fiction', 'https://images-na.ssl-images-amazon.com/images/I/41Zmmx6WBtL._SX317_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (4, 'Educated', 'Tara Westover', 2018, 'United-States', 'Tara Westover recounts overcoming her survivalist Mormon family in order to go to college, and emphasizes the importance of education to enlarging her world. She details her journey from her isolated life in the mountains of Idaho to completing a PhD program in history at Cambridge University. She started college at the age of seventeen after having had no formal education. She also explores her struggle to fit into the larger world beyond what her radical survivalist father had created.', 'autobiography', 'https://images-na.ssl-images-amazon.com/images/I/51ld99MnjoL._SX324_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (5, 'Normal People', 'Sally Rooney', 2018, 'Ireland', 'Connell and Marianne grow up in the same small town in the west of Ireland, but the similarities end there. In school, Connell is popular and well-liked, while Marianne is a loner. But when the two strike up a conversation - awkward but electrifying - something life-changing begins. Normal People is a story of mutual fascination, friendship and love. It takes us from that first conversation to the years beyond, in the company of two people who try to stay apart but find they can''t.', 'fiction', 'https://images-na.ssl-images-amazon.com/images/I/41tjS2DPOZL._SX324_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (6, 'Where the Crawdads Sing', 'Delia Owens', 2018, 'United-States', 'For years, rumors of the Marsh Girl have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life - until the unthinkable happens.', 'fiction', 'https://images-na.ssl-images-amazon.com/images/I/51jXWPV1PoL._SX316_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (7, 'Girl, Woman, Other', 'Bernardine Evaristo', 2019, 'United-States', 'This is Britain as you''ve never read it. This is Britain as it has never been told. From Newcastle to Cornwall, from the birth of the twentieth century to the teens of the twenty-first, Girl, Woman, Other follows a cast of twelve characters on their personal journeys through this country and the last hundred years. They''re each looking for something - a shared past, an unexpected future, a place to call home, somewhere to fit in, a lover, a missed mother, a lost father, even just a touch of hope.', 'fiction', 'https://images-na.ssl-images-amazon.com/images/I/51ahH0NU6BL._SX324_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (8, 'Everything I Know About Love', 'Dolly Alderton', 2018, 'United-Kingdom', 'When it comes to the trials and triumphs of becoming a grown up, journalist Dolly Alderton has seen and tried it all. She vividly recounts falling in love, wrestling with self-sabotage, finding a job, throwing a socially disastrous Rod-Stewart themed house party, getting drunk, getting dumped, realising that Ivan from the corner shop is the only man you''ve ever been able to rely on, and finding that that your mates are always there at the end of every messy night out. It''s a book about bad dates, good friends and - above all else - about recognising that you and you alone are enough.', 'autobiography', 'https://images-na.ssl-images-amazon.com/images/I/51e2-LIM3aL._SX324_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });


  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (9, 'My Year of Rest and Relaxation', 'Ottessa Moshfegh', 2019, 'United-States', 'It's the year 2000 in a city aglitter with wealth and possibility; what could be so terribly wrong? Our narrator has many of the advantages of life: Young, thin, pretty, a recent Columbia graduate, she lives in an apartment on the Upper East Side of Manhattan paid for, like everything else, by her inheritance. But there is a vacuum at the heart of things, and it isn't just the loss of her parents in college, or the way her Wall Street boyfriend treats her, or her sadomasochistic relationship with her alleged best friend.', 'fiction', 'https://m.media-amazon.com/images/I/51GAFkml+FL.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (10, 'I Feel Bad About My Neck', 'Nora Ephron', 2006, 'United-States', 'Never marry a man you wouldnt want to be divorced from. If the shoe doesnt fit in the shoe store, it''s never going to fit. When your children are teenagers, its important to have a dog so that someone in the house is happy to see you. If only one third of your clothes are mistakes, you are ahead of the game. Anything you think is wrong with your body at the age of thirty-five you will be nostalgic for by the age of forty-five.', 'lifestyle', 'https://images-na.ssl-images-amazon.com/images/I/41f3BaNahUL._SX323_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (11, 'The Truth about the Harry Quebert Affair', 'Joël Dicker', 2012, 'Switzerland', 'That summer, struggling author Harry Quebert fell in love with fifteen-year-old Nola Kellergan. Thirty-three years later, her body is dug up from his yard, along with a manuscript copy of the novel that made him a household name. Quebert is the only suspect.', 'fiction', 'https://images-na.ssl-images-amazon.com/images/I/51s8afPWtHL._SX325_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  sql = 
  "INSERT INTO bookclub.books (id, title, author, year, country, summary, genre, cover) VALUES (12, 'Women Dont Owe You Pretty', 'Florence Given', 2020, null, 'The ultimate book for anyone who wants to challenge the out-dated narratives supplied to us by the patriarchy. Through Florences story you will learn how to protect your energy, discover that you are the love of your own life, and realise that today is a wonderful day to dump them.', 'lifestyle', 'https://images-na.ssl-images-amazon.com/images/I/41m1-HIUglL._SX322_BO1,204,203,200_.jpg');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

  });

  con.end();
});
