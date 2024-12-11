const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('src')); // учет доступа к статическим файлам

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // отправка HTML-файла
});

app.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});
