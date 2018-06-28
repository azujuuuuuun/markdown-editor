const express = require('express');

const app = express();

app.use(express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/public/css', express.static('public/css'));

app.listen(3000, () => {
  console.log('markdown-editor listening on port 3000!');
});
