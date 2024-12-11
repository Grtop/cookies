import express from 'express';
import apiRouter from './api';
const app = express();
const port = 3000;
app.use(express.static('public')); // учет доступа к статическим файлам
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // отправка HTML-файла
});
app.use('/api', apiRouter);
app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});
//# sourceMappingURL=server.js.map