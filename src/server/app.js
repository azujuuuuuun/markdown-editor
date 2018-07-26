const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../db/models');
const user = db.sequelize.import('../../db/models/user');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/public/css', express.static('public/css'));

app.get(/.*/, (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <title>markdown editor</title>
        <link rel="stylesheet" type="text/css" href="/public/css/style.css">
      </head>
      <body>
        <div id="root"></div>
        <script src="../dist/bundle.js"></script>
      </body>
    </html>
  `);
});

app.post('/signup', (req, res) => {
  const {
    userName,
    email,
    password,
  } = req.body;
  user.create({
    userName: userName,
    email: email,
    password: password,
  })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post('/login', (req, res) => {
  const {
    userName,
    password,
  } = req.body;
  user.findOne({where: {userName: userName, password: password}})
    .then((u) => {
      if (u) {
        res.status(200).send();
      } else {
        res.status(400).send('error');
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(3000, () => {
  console.log('markdown-editor listening on port 3000!');
});
