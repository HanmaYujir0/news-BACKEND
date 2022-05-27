const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())
app.use(require('./routes/news.route'))
app.use(require('./routes/comment.route'))
app.use(require('./routes/categories.route'))


mongoose.connect('mongodb+srv://Emin1:1221@cluster0.4kuhk6r.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

const port = 4000;

app.listen(port, () => {
    console.log('Сервер запущен успешно')
})